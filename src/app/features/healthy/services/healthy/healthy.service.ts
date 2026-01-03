import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL2 } from '../../../../../../projects/auth/src/base/token';
import { ICategoriesResponse, IMealResponse } from '../../../../shared/interfaces/healthy/ihealthy.interface';
import { IMeals } from '../../../../shared/interfaces/IMeal';
 
@Injectable({
  providedIn: 'root',
})
export class HealthyService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(BASE_URL2);


  getMealsCategories(): Observable<ICategoriesResponse> {
    return this.http.get<ICategoriesResponse>(
      `${this.baseUrl}/categories.php`
    );
  }


  getByCategory(categoryName: string): Observable<IMealResponse> {
    return this.http.get<IMealResponse>(
      `${this.baseUrl}/filter.php?c=${categoryName}`
    );
  }

  
  mealsDetails(idMeal: string | null): Observable<{ meals: IMeals[] }> {
    return this.http.get<{ meals: IMeals[] }>(
      `${this.baseUrl}/lookup.php?i=${idMeal}`
    );
  }
}
