import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutShellComponent } from './layout/components/layout-shell/layout-shell.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'alumnos',
        loadChildren: () =>
          import('./students/students.module').then(m => m.StudentsModule)
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./courses/courses.module').then(m => m.CoursesModule)
      },
      {
        path: 'inscripciones',
        loadChildren: () =>
          import('./enrollments/enrollments.module').then(m => m.EnrollmentsModule)
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./users/users.module').then(m => m.UsersModule)
      },
      { path: '', redirectTo: 'alumnos', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
