import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ICategoriesResponse,
  IMealResponse,
} from '../../../shared/interfaces/healthy/ihealthy.interface';
import { environment } from '../../environments/environment';
import { IMeals } from '../../../shared/interfaces/IMeal';

@Injectable({
  providedIn: 'root',
})
export class HealthyService {

  private readonly http = inject(HttpClient);


  getMealsCategories(): Observable<ICategoriesResponse> {
    return this.http.get<ICategoriesResponse>(
      `${environment.baseUrl2}/categories.php`
    );
  }


  getByCategory(categoryName: string): Observable<IMealResponse> {
    return this.http.get<IMealResponse>(
      `${environment.baseUrl2}/filter.php?c=${categoryName}`
    );
  }

  
  mealsDetails(idMeal: string | null): Observable<{ meals: IMeals[] }> {
    return this.http.get<{ meals: IMeals[] }>(
      `${environment.baseUrl2}/lookup.php?i=${idMeal}`
    );
  }
}
