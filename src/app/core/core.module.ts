import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StudentsService } from './services/students.service';
import { CoursesService } from './services/courses.service';
import { EnrollmentsService } from './services/enrollments.service';
import { UsersService } from './services/users.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  providers: [
    AuthService,
    StudentsService,
    CoursesService,
    EnrollmentsService,
    UsersService,
    AuthGuard
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule | null) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
