import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
 import { TabsComponent } from "../../shared/components/tabs/tabs.component";
import { CardsComponent } from "../../shared/components/cards/cards.component";
import {  IMealItem } from '../../shared/interfaces/healthy/ihealthy.interface';
import { RouterLink } from "@angular/router";
import { HealthyService } from './services/healthy/healthy.service';
@Component({
  selector: 'app-healthy',
  templateUrl: './healthy.component.html',
  styleUrls: ['./healthy.component.scss'],
  imports: [TabsComponent, CardsComponent, RouterLink]
})
export class HealthyComponent implements OnInit, OnDestroy {

  categories: { id: string; name: string }[] = [];
  subCategory: IMealItem[] = [];
  selectedCategory: string = '';

  private healthyService = inject(HealthyService);
  sub1?: Subscription;
  sub2?: Subscription;

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.sub1 = this.healthyService.getMealsCategories().subscribe({
      next: (res) => {
        this.categories = res.categories.map(c => ({
          id: c.idCategory,
          name: c.strCategory
        }));

        if (this.categories.length > 0) {
          const first = this.categories[0];
          this.selectedCategory = first.name;
          this.getSubCategory(first.name);
        }
      },
      error: (err) => console.log(err)
    });
  }
getSubCategory(categoryName: string) {
  this.sub2 = this.healthyService.getByCategory(categoryName).subscribe({
    next: (res) => {
      this.subCategory = res.meals ? res.meals.slice(0, 3) : [];
    },
    error: (err) => console.log(err)
  });
}

 setActive(name: string, id: string) {
  this.selectedCategory = name;     
  this.getSubCategory(name);        
}


  ngOnDestroy() {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
  }
}
