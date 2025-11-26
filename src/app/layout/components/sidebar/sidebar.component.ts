import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { selectCurrentUser } from '../../../store/app.selectors';
import { User } from '../../../core/models/user.model';
import { Router } from '@angular/router';
import { logout } from '../../../store/app.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  currentUser$: Observable<User | null>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.currentUser$ = this.store.select(selectCurrentUser);
  }

  onLogout(): void {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
