import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMusclesIdResponse } from '../../../shared/interfaces/musclesid/imusclesid.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MusclesIdService {
    private readonly http=inject(HttpClient);

getAllMusclesGroupID(id: string): Observable<IMusclesIdResponse> {
  return this.http.get<IMusclesIdResponse>(
    `${environment.baseUrl}/musclesGroup/${id}`
  );
}


  
  
}
