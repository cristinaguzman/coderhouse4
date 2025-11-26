import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { setToolbarTitle } from '../../../store/app.actions';
import { EnrollmentsService } from '../../../core/services/enrollments.service';
import { Enrollment } from '../../../core/models/enrollment.model';

@Component({
  selector: 'app-enrollments-list',
  templateUrl: './enrollments-list.component.html',
  styleUrls: ['./enrollments-list.component.scss']
})
export class EnrollmentsListComponent implements OnInit {
  enrollments: Enrollment[] = [];

  constructor(
    private store: Store<AppState>,
    private enrollmentsService: EnrollmentsService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(setToolbarTitle({ title: 'Inscripciones' }));
    this.enrollmentsService
      .getEnrollments()
      .subscribe(e => (this.enrollments = e));
  }
}
