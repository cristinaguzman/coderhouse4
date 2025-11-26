import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import { loginSuccess, logout, setToolbarTitle } from './app.actions';

export const initialState: AppState = {
  currentUser: null,
  toolbarTitle: 'Inicio'
};

export const appReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, currentUser: user })),
  on(logout, state => ({ ...state, currentUser: null })),
  on(setToolbarTitle, (state, { title }) => ({ ...state, toolbarTitle: title }))
);
