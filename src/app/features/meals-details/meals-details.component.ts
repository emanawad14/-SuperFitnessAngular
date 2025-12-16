import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { HealthyService } from '../../core/services/healthy/healthy.service';
import { TabsComponent } from '../../shared/components/tabs/tabs.component';
import { IMealItem } from '../../shared/interfaces/healthy/ihealthy.interface';
import { IMeals } from '../../shared/interfaces/IMeal';

@Component({
  selector: 'app-meals-details',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './meals-details.component.html',
  styleUrl: './meals-details.component.scss',
})
export class MealsDetailsComponent implements OnInit, OnDestroy {

  categories: { id: string; name: string }[] = [];
  selectedCategory = '';

  meals: IMealItem[] = [];   
  selectedMeal!: IMeals;    

  private healthyService = inject(HealthyService);
  private subs: Subscription[] = [];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    const sub = this.healthyService.getMealsCategories().subscribe(res => {
      this.categories = res.categories.map((c: any) => ({
        id: c.idCategory,
        name: c.strCategory,
      }));

      if (this.categories.length) {
        this.setActive(this.categories[0].name);
      }
    });

    this.subs.push(sub);
  }

  setActive(categoryName: string) {
    this.selectedCategory = categoryName;
    this.getMealsByCategory(categoryName);
  }

  getMealsByCategory(categoryName: string) {
    const sub = this.healthyService.getByCategory(categoryName).subscribe(res => {
      this.meals = res.meals?.slice(0, 5) || [];

      if (this.meals.length) {
        this.loadMealDetails(this.meals[0].idMeal);
      }
    });

    this.subs.push(sub);
  }

  selectMeal(meal: IMealItem) {
    this.loadMealDetails(meal.idMeal);
  }

  loadMealDetails(id: string) {
    const sub = this.healthyService.mealsDetails(id).subscribe(res => {
      this.selectedMeal = res.meals[0]; 
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
