import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseExercies } from '../../../shared/interfaces/exercies/iexercies.interface';


@Injectable({
  providedIn: 'root',
})
export class ClassesService {

  private readonly http = inject(HttpClient);
 

  getExerciesByPrime(primeMoverMuscleId: string, difficultyLevelId: string): Observable<ResponseExercies> {
    return this.http.get<ResponseExercies>(`${environment.baseUrl}/exercises/by-muscle-difficulty?primeMoverMuscleId=${primeMoverMuscleId}&difficultyLevelId=${difficultyLevelId}`);
  }

  getDifficultyByPrime(primeMoverMuscleId: string |null): Observable<any> {
    return this.http.get(`${environment.baseUrl}/levels/difficulty-levels/by-prime-mover?primeMoverMuscleId=${primeMoverMuscleId}`);
  }
}
