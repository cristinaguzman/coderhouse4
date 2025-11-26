import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../core/services/students.service';
import { Student } from '../../../core/models/student.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { setToolbarTitle } from '../../../store/app.actions';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  student: Student | null = null;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(setToolbarTitle({ title: 'Detalle alumno' }));
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentsService.getStudents().subscribe(sts => {
        this.student = sts.find(s => s.id === id) ?? null;
      });
    }
  }
}
