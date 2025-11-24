import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoriesResponse } from '../../../shared/interfaces/healthy/ihealthy.interface';

@Injectable({
  providedIn: 'root',
})
export class HealthyService {
  private readonly http=inject(HttpClient);

  getMealsCategories():Observable<ICategoriesResponse>
  {
    return this.http.get<ICategoriesResponse>(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  }
  
}
