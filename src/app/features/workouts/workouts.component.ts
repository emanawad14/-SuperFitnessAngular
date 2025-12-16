import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { MusclesgroupService } from '../../core/services/musclesggroup/musclesgroup.service';
import { MusclesIdService } from '../../core/services/musclesId/muscles-id.service';
import { Imuscles } from '../../shared/interfaces/muscles/imuscles.interface';
import { ImusclesId } from '../../shared/interfaces/musclesid/imusclesid.interface';
import { Subscription } from 'rxjs';
import { TabsComponent } from '../../shared/components/tabs/tabs.component';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-workouts',
  standalone: true,
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  imports: [TabsComponent, CardsComponent, RouterLink],
})
export class WorkoutsComponent implements OnInit, OnDestroy {
  selectedDifficultyId!: string;

  selectedMuscle = '';
  muscles: { id: string; name: string }[] = [];
  muscleCards: ImusclesId[] = [];

  private sub1?: Subscription;
  private sub2?: Subscription;

  private readonly musclesgroupService = inject(MusclesgroupService);
  private readonly musclesIdService = inject(MusclesIdService);

  ngOnInit(): void {
    this.getAllMuscles();
  }

  getAllMuscles() {
    this.sub1 = this.musclesgroupService.getAllMusclesGroup().subscribe({
      next: (res) => {
        this.muscles = res.musclesGroup.slice(0, 7).map((m: Imuscles) => ({
          id: m._id,
          name: m.name,
        }));

        if (this.muscles.length) {
          const first = this.muscles[0];
          this.selectedMuscle = first.name;
          console.log(`--> ${this.muscles}`);
          console.log(`--> (@) ${this.selectedMuscle}`);
          this.getIdMuscles(first.id);
        }
      },
    });
  }

  getIdMuscles(id: string) {
    this.sub2 = this.musclesIdService.getAllMusclesGroupID(id).subscribe({
      next: (res) => {
        this.muscleCards = res.muscles;
      },
    });
  }

  setActive(muscleName: string, id: string) {
    this.selectedMuscle = muscleName;
    this.getIdMuscles(id);
  }

  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
  }
}
