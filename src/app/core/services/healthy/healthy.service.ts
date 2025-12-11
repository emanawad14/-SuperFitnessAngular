import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoriesResponse, IMealResponse } from '../../../shared/interfaces/healthy/ihealthy.interface';
@Injectable({
  providedIn: 'root',
})
export class HealthyService {

  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';
  private readonly http = inject(HttpClient);

 
  getMealsCategories(): Observable<ICategoriesResponse> {
    return this.http.get<ICategoriesResponse>(`${this.baseUrl}/categories.php`);
  }

 
  getByCategory(categoryName: string): Observable<IMealResponse> {
    return this.http.get<IMealResponse>(
      `${this.baseUrl}/filter.php?c=${categoryName}`
    );
  }
}
