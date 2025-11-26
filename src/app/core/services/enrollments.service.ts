import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment.model';

@Injectable()
export class EnrollmentsService {
  private readonly enrollmentsUrl = 'https://mockapi.io/api/v1/enrollments'; // placeholder

  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.enrollmentsUrl);
  }
}
