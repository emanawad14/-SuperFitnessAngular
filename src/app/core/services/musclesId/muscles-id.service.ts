import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMusclesIdResponse } from '../../../shared/interfaces/musclesid/imusclesid.interface';

@Injectable({
  providedIn: 'root',
})
export class MusclesIdService {
    private readonly http=inject(HttpClient);


getAllMusclesGroupID(id: string): Observable<IMusclesIdResponse> {
  return this.http.get<IMusclesIdResponse>(`https://fitness.elevateegy.com/api/v1/musclesGroup/${id}`);
}

  
  
}
