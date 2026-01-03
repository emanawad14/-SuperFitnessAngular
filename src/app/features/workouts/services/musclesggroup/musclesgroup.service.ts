import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMusclesResponse } from '../../../../shared/interfaces/muscles/imuscles.interface';
import { BASE_URL1 } from '../../../../../../projects/auth/src/base/token';
 
@Injectable({
  providedIn: 'root',
})
export class MusclesgroupService {

  private readonly http=inject(HttpClient);
  private readonly baseUrl=inject(BASE_URL1);

  getAllMusclesGroup():Observable<IMusclesResponse>
  {
    return this.http.get<IMusclesResponse>(`${this.baseUrl}/muscles`)
  }
  
}
