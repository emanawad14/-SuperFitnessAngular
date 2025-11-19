import { Component, inject, OnInit } from '@angular/core';
import { HealthyService } from '../../core/services/healthy/healthy.service';
import { Ihealthy } from '../../shared/interfaces/healthy/ihealthy.interface';

@Component({
  selector: 'app-healthy',
  imports: [],
  templateUrl: './healthy.component.html',
  styleUrl: './healthy.component.scss',
})
export class HealthyComponent implements OnInit {


  meals:Ihealthy[]=[]
  private readonly healthyService=inject(HealthyService)

  ngOnInit(): void {
      this.getCategories()
  }

  getCategories()
  {
    this.healthyService.getMealsCategories().subscribe(
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
}
