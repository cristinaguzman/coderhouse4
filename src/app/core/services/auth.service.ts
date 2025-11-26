import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  private readonly usersUrl = 'https://mockapi.io/api/v1/users'; // placeholder

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map(users => users.find(u => u.email === email && u.password === password) ?? null)
    );
  }
}
