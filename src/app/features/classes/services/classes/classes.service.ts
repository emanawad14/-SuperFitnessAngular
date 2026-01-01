import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL1 } from '../../../../../../projects/auth/src/base/token';
import { ResponseExercies } from '../../../../shared/interfaces/exercies/iexercies.interface';
 

@Injectable({
  providedIn: 'root',
})
export class ClassesService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(BASE_URL1);
 

  getExerciesByPrime(primeMoverMuscleId: string, difficultyLevelId: string): Observable<ResponseExercies> {
    return this.http.get<ResponseExercies>(`${this.baseUrl}/exercises/by-muscle-difficulty?primeMoverMuscleId=${primeMoverMuscleId}&difficultyLevelId=${difficultyLevelId}`);
  }

  getDifficultyByPrime(primeMoverMuscleId: string |null): Observable<any> {
    return this.http.get(`${this.baseUrl}/levels/difficulty-levels/by-prime-mover?primeMoverMuscleId=${primeMoverMuscleId}`);
  }
}
