import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';

@NgModule({
  declarations: [CoursesListComponent, CourseDetailComponent],
  imports: [SharedModule, CoursesRoutingModule]
})
export class CoursesModule {}
