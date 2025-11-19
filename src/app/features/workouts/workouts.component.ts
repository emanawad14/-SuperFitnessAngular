import { Component, inject, OnInit } from '@angular/core';
import { MusclesgroupService } from '../../core/services/musclesggroup/musclesgroup.service';
import { MusclesIdService } from '../../core/services/musclesId/muscles-id.service';
import { Imuscles } from '../../shared/interfaces/muscles/imuscles.interface';
import { ImusclesId } from '../../shared/interfaces/musclesid/imusclesid.interface';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  selectedMuscle: string = '';
  muscles: Imuscles[] = [];
  muscleCards: ImusclesId[] = []; 
  private readonly musclesgroupService = inject(MusclesgroupService);
  private readonly musclesIdService = inject(MusclesIdService);

 ngOnInit(): void {
  this.getAllMuscles();
}

getAllMuscles() {
  this.musclesgroupService.getAllMusclesGroup().subscribe({
    next: (res) => {
      this.muscles = res.musclesGroup.slice(0, 7);

     
      if (this.muscles.length > 0) {
        const first = this.muscles[0];
        this.selectedMuscle = first.name;
        this.getIdMuscles(first._id);
      }
    },
    error: (err) => console.log(err)
  });
}


  getIdMuscles(id: string) {
    this.musclesIdService.getAllMusclesGroupID(id).subscribe({
      next: (res) => {
        console.log("muscle cards = ", res);
        this.muscleCards = res.muscles
      },
      error: (err) => console.log(err)
    });
  }

  setActive(muscleName: string, id: string) {
    this.selectedMuscle = muscleName;
    this.getIdMuscles(id);
  }
}
