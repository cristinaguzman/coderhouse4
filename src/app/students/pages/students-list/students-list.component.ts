import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../core/services/students.service';
import { Student } from '../../../core/models/student.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { setToolbarTitle } from '../../../store/app.actions';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private studentsService: StudentsService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(setToolbarTitle({ title: 'Alumnos' }));
    this.studentsService.getStudents().subscribe(sts => (this.students = sts));
  }
}
