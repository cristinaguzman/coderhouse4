import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { loginSuccess, setToolbarTitle } from '../../../store/app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error = '';
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.error = 'Completa todos los campos correctamente';
      return;
    }

    const { email, password } = this.form.value;

    this.authService.login(email || '', password || '').subscribe(user => {
      if (!user) {
        this.error = 'Credenciales inválidas';
        return;
      }
      this.store.dispatch(loginSuccess({ user }));
      this.store.dispatch(setToolbarTitle({ title: 'Alumnos' }));
      this.router.navigate(['/alumnos']);
    });
  }
}
