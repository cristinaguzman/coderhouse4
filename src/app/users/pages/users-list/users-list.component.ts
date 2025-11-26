import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { User } from '../../../core/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { setToolbarTitle } from '../../../store/app.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private usersService: UsersService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(setToolbarTitle({ title: 'Usuarios' }));
    this.usersService.getUsers().subscribe(us => (this.users = us));
  }
}
