import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { selectToolbarTitle, selectCurrentUser } from '../../../store/app.selectors';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  title$: Observable<string>;
  currentUser$: Observable<User | null>;

  constructor(private store: Store<AppState>) {
    this.title$ = this.store.select(selectToolbarTitle);
    this.currentUser$ = this.store.select(selectCurrentUser);
  }
}
