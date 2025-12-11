import { Component, inject, OnInit } from '@angular/core';
import { CardsComponent } from "../../shared/components/cards/cards.component";
import { HealthyService } from '../../core/services/healthy/healthy.service';
import { Ihealthy } from '../../shared/interfaces/healthy/ihealthy.interface';

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
        console.log(res);
      },
      error:(err)=>
      {
        console.log(err);
        

      }
    })
    
  }
  
}
