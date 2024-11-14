import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthModel } from '../models/auth.models';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    tokenKey: string = "KEY";

    private aptUrl = environment.authUrl;
    private http = inject(HttpClient);

    auth(email: string, password: string): Observable<AuthModel> {
        return this.http.post<AuthModel>(this.aptUrl, { email, password })
            .pipe(
                tap((response: AuthModel) => this.storeToken(response.content))
            )
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    private storeToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

}

