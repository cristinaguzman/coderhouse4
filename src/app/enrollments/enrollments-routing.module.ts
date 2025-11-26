import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentsListComponent } from './pages/enrollments-list/enrollments-list.component';

const routes: Routes = [{ path: '', component: EnrollmentsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentsRoutingModule {}
