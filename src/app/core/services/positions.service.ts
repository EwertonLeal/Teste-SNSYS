import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginationRequest } from '../models/paginationRequest.model';
import { AuthenticationService } from './auth.service';
import { Observable, tap } from 'rxjs';
import { Position } from '../models/position.model';
import { ApiResponse } from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private aptUrl = environment.userPosition;
  private http = inject(HttpClient);
  private authService = inject(AuthenticationService)

  getAllPositions(filter: PaginationRequest): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`,
    });

    return this.http.post<ApiResponse>("https://dev-erp.haup.com.br/api/v3/settings/UserPosition/GetAll", filter, { headers: headers })
  }

}
