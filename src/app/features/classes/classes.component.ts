import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { ClassesService } from '../../core/services/classes/classes.service';
import { MusclesIdService } from './../../core/services/musclesId/muscles-id.service';
import { MusclesgroupService } from '../../core/services/musclesggroup/musclesgroup.service';
import { HealthyService } from '../../core/services/healthy/healthy.service';

import { TabsComponent } from '../../shared/components/tabs/tabs.component';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { SliderComponent } from '../../shared/components/slider/slider.component';

import { Exercise } from '../../shared/interfaces/exercies/iexercies.interface';
import { DifficultyLevel } from '../../shared/interfaces/levels/ilevels.interface';
import { Imuscles } from '../../shared/interfaces/muscles/imuscles.interface';
import { ImusclesId } from '../../shared/interfaces/musclesid/imusclesid.interface';
import { IMealItem } from '../../shared/interfaces/healthy/ihealthy.interface';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule, TabsComponent, CardsComponent, SliderComponent],
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit, OnDestroy {

  /* ================= Inject ================= */
  private route = inject(ActivatedRoute);
  private classesService = inject(ClassesService);
  private musclesIdService = inject(MusclesIdService);
  private musclesGroupService = inject(MusclesgroupService);
  private healthyService = inject(HealthyService);
  private sanitizer = inject(DomSanitizer);

  /* ================= State ================= */
  primeId!: string;

  levels: DifficultyLevel[] = [];
  exercises: Exercise[] = [];
  selectedExercise: Exercise | null = null;
  videoUrl: SafeResourceUrl | null = null;

  muscles: { id: string; name: string }[] = [];
  muscleCards: ImusclesId[] = [];
  selectedMuscle = '';

  categories: { id: string; name: string }[] = [];
  subCategory: IMealItem[] = [];
  selectedCategory = '';

  private subs = new Subscription();

  /* ================= Lifecycle ================= */
  ngOnInit(): void {
    this.getAllMuscles();
    this.getCategories();

    this.subs.add(
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (!id) return;

        this.primeId = id;
        this.loadLevels();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  /* ================= Levels ================= */
  loadLevels(): void {
    this.subs.add(
      this.classesService.getDifficultyByPrime(this.primeId).subscribe(res => {
        this.levels = res.difficulty_levels;
        if (this.levels.length) {
          this.loadExercises(this.levels[0].id);
        }
      })
    );
  }

  onLevelChange(level: DifficultyLevel): void {
    this.loadExercises(level.id);
  }

  loadExercises(levelId: string): void {
    this.subs.add(
      this.classesService.getExerciesByPrime(this.primeId, levelId).subscribe(res => {
        this.exercises = res.exercises;
        if (this.exercises.length) {
          this.selectExercise(this.exercises[0]);
        } else {
          this.selectedExercise = null;
          this.videoUrl = null;
        }
      })
    );
  }

  /* ================= Exercise ================= */
  selectExercise(ex: Exercise): void {
    this.selectedExercise = ex;
    this.videoUrl = this.getYoutubeEmbed(ex.short_youtube_demonstration_link);
  }

  getYoutubeEmbed(link: string | null): SafeResourceUrl | null {
    if (!link) return null;
    const videoId =
      link.split('v=')[1]?.split('&')[0] || link.split('/').pop();

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=1`
    );
  }

  /* ================= Muscles ================= */
  getAllMuscles(): void {
    this.subs.add(
      this.musclesGroupService.getAllMusclesGroup().subscribe(res => {
        this.muscles = res.musclesGroup.slice(0, 7).map((m: Imuscles) => ({
          id: m._id,
          name: m.name,
        }));

        if (this.muscles.length) {
          this.setActive(this.muscles[0].name, this.muscles[0].id);
        }
      })
    );
  }

  setActive(name: string, id: string): void {
    this.selectedMuscle = name;

    this.subs.add(
      this.musclesIdService.getAllMusclesGroupID(id).subscribe(res => {
        this.muscleCards = res.muscles;
      })
    );
  }

  /* ================= Healthy ================= */
  getCategories(): void {
    this.subs.add(
      this.healthyService.getMealsCategories().subscribe(res => {
        this.categories = res.categories.map(c => ({
          id: c.idCategory,
          name: c.strCategory,
        }));

        if (this.categories.length) {
          this.selectedCategory = this.categories[0].name;
          this.getSubCategory(this.selectedCategory);
        }
      })
    );
  }

  getSubCategory(categoryName: string): void {
    this.subs.add(
      this.healthyService.getByCategory(categoryName).subscribe(res => {
        this.subCategory = res.meals ? res.meals.slice(0, 3) : [];
      })
    );
  }
}
