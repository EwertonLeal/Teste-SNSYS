import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthModel } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<AuthModel[]>(`/api/login`);
    }

    register(user: AuthModel) {
        return this.http.post(`/users/register`, user);
    }
}
