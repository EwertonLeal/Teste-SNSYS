import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginationRequest } from '../models/paginationRequest.model';
import { AuthenticationService } from './auth.service';
import { Observable } from 'rxjs';
import { Position } from '../models/position.model';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private aptUrl = environment.userPosition;
  private http = inject(HttpClient);
  private authService = inject(AuthenticationService)

  getAllPositions(filter: PaginationRequest): Observable<Position> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getToken(),
    });

    return this.http.post<Position>(this.aptUrl, filter, { headers: headers })
  }

}
