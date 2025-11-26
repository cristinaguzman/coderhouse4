import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsListComponent } from './pages/enrollments-list/enrollments-list.component';

@NgModule({
  declarations: [EnrollmentsListComponent],
  imports: [SharedModule, EnrollmentsRoutingModule]
})
export class EnrollmentsModule {}
