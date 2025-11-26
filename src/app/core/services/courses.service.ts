import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable()
export class CoursesService {
  private readonly coursesUrl = 'https://mockapi.io/api/v1/courses'; // placeholder

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }

  getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.coursesUrl}/${id}`);
  }
}
