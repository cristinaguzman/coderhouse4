import { User } from '../core/models/user.model';

export interface AppState {
  currentUser: User | null;
  toolbarTitle: string;
}
