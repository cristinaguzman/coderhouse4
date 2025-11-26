import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { AppState } from '../../store/app.state';
import { selectCurrentUser } from '../../store/app.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const isUsersRoute = state.url.startsWith('/usuarios');

    return this.store.select(selectCurrentUser).pipe(
      take(1),
      map(user => {
        if (!user) {
          this.router.navigate(['/login']);
          return false;
        }

        if (isUsersRoute && user.perfil !== 'admin') {
          this.router.navigate(['/alumnos']);
          return false;
        }

        return true;
      })
    );
  }
}
