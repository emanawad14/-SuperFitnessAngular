import { Component, inject } from '@angular/core';
import { ImusclesId } from '../../shared/interfaces/musclesid/imusclesid.interface';
import { Subscription } from 'rxjs';
import { MusclesgroupService } from '../../core/services/musclesggroup/musclesgroup.service';
import { MusclesIdService } from '../../core/services/musclesId/muscles-id.service';
import { Imuscles } from '../../shared/interfaces/muscles/imuscles.interface';
import { TabsComponent } from "../../shared/components/tabs/tabs.component";
import { ClassesService } from '../../core/services/classes/classes.service';

import { DifficultyLevel } from '../../shared/interfaces/levels/ilevels.interface';
import { Exercise } from '../../shared/interfaces/exercies/iexercies.interface';

@Component({
  selector: 'app-classes',
  imports: [TabsComponent],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss',
})
export class ClassesComponent {

  loading = false

  difficultyLevels: DifficultyLevel[] = [];
  exercies:Exercise[]=[]
selectedDifficulty: string = '';
primeId:string=''

  
    selectedMuscle: string = '';
    muscles: { id: string; name: string }[] = [];
    muscleCards: ImusclesId[] = [];
  
    subscription1?: Subscription;
    subscription2?: Subscription;
  
    private readonly musclesgroupService = inject(MusclesgroupService);
    private readonly musclesIdService = inject(MusclesIdService);
    private readonly getExerices=inject(ClassesService);

  
    ngOnInit(): void {
      this.getAllMuscles();
      // this.getDifficulty(this.primeId);
      // this.getAllExercies(this.primeId,this.selectedDifficulty)
    
    }
  
    getAllMuscles() {
      this.subscription1 = this.musclesgroupService.getAllMusclesGroup().subscribe({
        next: (res) => {
  
      
          this.muscles = res.musclesGroup.slice(0, 7).map((m: Imuscles) => ({
            id: m._id,
            name: m.name
          }));
  
          if (this.muscles.length > 0) {
            const first = this.muscles[0];
            this.selectedMuscle = first.name;
            this.getIdMuscles(first.id);
          }
        },
        error: (err) => console.log(err)
      });
    }
  
    // getIdMuscles(id: string) {
    //   this.subscription2 = this.musclesIdService.getAllMusclesGroupID(id).subscribe({
    //     next: (res) => {
    //       this.muscleCards = res.muscles;
    //     },
    //     error: (err) => console.log(err)
    //   });
    // }

    getIdMuscles(id: string) {
  this.subscription2 = this.musclesIdService.getAllMusclesGroupID(id).subscribe({
    next: (res) => {
      this.muscleCards = res.muscles;

      
      this.getDifficulty(id);
    },
    error: (err) => console.log(err)
  });
}

getDifficulty(primeId: string) {
  this.getExerices.getDifficultyByPrime(primeId).subscribe({
    next: (res) => {
      console.log(res);

      this.difficultyLevels = res.difficulty_levels;

      if (this.difficultyLevels.length > 0) {
        this.selectedDifficulty = this.difficultyLevels[0].id;
        this.getAllExercies(primeId, this.selectedDifficulty);
      }
    },
    error: (err) => console.log(err)
  });
}


getAllExercies(primeId: string, difficultyId: string) {
  this.loading = true;
  this.getExerices.getExerciesByPrime(primeId, difficultyId).subscribe({
    next: (res) => {

     console.log(res);
     
       this.exercies=res.exercises
    },
    // error: (err) => console.log(err)
  });
}

    setActive(muscleName: string, id: string) {
      this.selectedMuscle = muscleName;
      this.getIdMuscles(id);
    }
  
    ngOnDestroy(): void {
      this.subscription1?.unsubscribe();
      this.subscription2?.unsubscribe();
    }

}
