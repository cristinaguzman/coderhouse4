import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../core/models/course.model';
import { CoursesService } from '../../../core/services/courses.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { setToolbarTitle } from '../../../store/app.actions';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(setToolbarTitle({ title: 'Detalle curso' }));
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.coursesService.getCourse(id).subscribe(c => (this.course = c));
    }
  }
}
