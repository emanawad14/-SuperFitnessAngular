import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMusclesResponse } from '../../../shared/interfaces/muscles/imuscles.interface';

@Injectable({
  providedIn: 'root',
})
export class MusclesgroupService {

  private readonly http=inject(HttpClient);

  getAllMusclesGroup():Observable<IMusclesResponse>
  {
    return this.http.get<IMusclesResponse>('https://fitness.elevateegy.com/api/v1/muscles')
  }
  
}
