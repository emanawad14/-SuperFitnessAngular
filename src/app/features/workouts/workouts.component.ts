import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { MusclesgroupService } from '../../core/services/musclesggroup/musclesgroup.service';
import { MusclesIdService } from '../../core/services/musclesId/muscles-id.service';
import { Imuscles } from '../../shared/interfaces/muscles/imuscles.interface';
import { ImusclesId } from '../../shared/interfaces/musclesid/imusclesid.interface';
import { Subscription } from 'rxjs';
import { TabsComponent } from "../../shared/components/tabs/tabs.component";
import { CardsComponent } from "../../shared/components/cards/cards.component";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  imports: [TabsComponent, CardsComponent]
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  selectedMuscle: string = '';
  muscles: { id: string; name: string }[] = [];
  muscleCards: ImusclesId[] = [];

  subscription1?: Subscription;
  subscription2?: Subscription;

  private readonly musclesgroupService = inject(MusclesgroupService);
  private readonly musclesIdService = inject(MusclesIdService);

  ngOnInit(): void {
    this.getAllMuscles();
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

  getIdMuscles(id: string) {
    this.subscription2 = this.musclesIdService.getAllMusclesGroupID(id).subscribe({
      next: (res) => {
        this.muscleCards = res.muscles;
      },
      error: (err) => console.log(err)
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
