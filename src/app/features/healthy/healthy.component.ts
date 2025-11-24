import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HealthyService } from '../../core/services/healthy/healthy.service';
import { Ihealthy } from '../../shared/interfaces/healthy/ihealthy.interface';
import { Subscription } from 'rxjs';
import { CardsComponent } from "../../shared/components/cards/cards.component";

@Component({
  selector: 'app-healthy',
  imports: [CardsComponent],
  templateUrl: './healthy.component.html',
  styleUrl: './healthy.component.scss',
})
export class HealthyComponent implements OnInit , OnDestroy {
  subscription1?: Subscription;



  meals:Ihealthy[]=[]
  private readonly healthyService=inject(HealthyService)

  ngOnInit(): void {
      this.getCategories()
  }

  getCategories()
  {
  this.subscription1=  this.healthyService.getMealsCategories().subscribe(
      {
        next:(res)=>
        {
          console.log(res);
          this.meals = res.categories.slice(0,3)

          

        },
        error:(err)=>
        {
          console.log(err);
          

        }
      }
    )
  }


  ngOnDestroy(): void {
      this.subscription1?.unsubscribe()
  }
}
