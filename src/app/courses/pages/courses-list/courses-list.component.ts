import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/models/course.model';
import { CoursesService } from '../../../core/services/courses.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { setToolbarTitle } from '../../../store/app.actions';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private coursesService: CoursesService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(setToolbarTitle({ title: 'Cursos' }));
    this.coursesService.getCourses().subscribe(cs => (this.courses = cs));
  }
}
