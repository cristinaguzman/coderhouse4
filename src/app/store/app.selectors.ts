import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectCurrentUser = createSelector(
  selectAppState,
  state => state.currentUser
);

export const selectToolbarTitle = createSelector(
  selectAppState,
  state => state.toolbarTitle
);
