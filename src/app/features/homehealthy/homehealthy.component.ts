import { Component, inject, OnInit } from '@angular/core';
import { CardsComponent } from "../../shared/components/cards/cards.component";
 import { Ihealthy } from '../../shared/interfaces/healthy/ihealthy.interface';
import { HealthyService } from '../healthy/services/healthy/healthy.service';

@Component({
  selector: 'app-homehealthy',
  imports: [CardsComponent],
  templateUrl: './homehealthy.component.html',
  styleUrl: './homehealthy.component.scss',
})
export class HomehealthyComponent  implements OnInit{


  meals:Ihealthy[]=[]
  private readonly healthyService= inject(HealthyService)
  ngOnInit(): void {
      this.getAllHealthy()
  }



  getAllHealthy()
  {
    this.healthyService.getMealsCategories().subscribe({
      next:(res)=>
      {
        this.meals=res.categories.slice(0,3)
       },
      error:(err)=>
      {
         

      }
    })
    
  }
  
}
