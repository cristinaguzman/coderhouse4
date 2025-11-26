import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './pages/students-list/students-list.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';

@NgModule({
  declarations: [StudentsListComponent, StudentDetailComponent],
  imports: [SharedModule, StudentsRoutingModule]
})
export class StudentsModule {}
