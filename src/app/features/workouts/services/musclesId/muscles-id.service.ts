import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMusclesIdResponse } from '../../../../shared/interfaces/musclesid/imusclesid.interface';
import { BASE_URL1 } from '../../../../../../projects/auth/src/base/token';
 
@Injectable({
  providedIn: 'root',
})
export class MusclesIdService {
    private readonly http=inject(HttpClient);
    private readonly baseUrl=inject(BASE_URL1);

getAllMusclesGroupID(id: string): Observable<IMusclesIdResponse> {
  return this.http.get<IMusclesIdResponse>(
    `${this.baseUrl}/musclesGroup/${id}`
  );
}


  
  
}
