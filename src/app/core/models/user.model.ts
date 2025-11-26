export type UserPerfil = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  password: string;
  nombre: string;
  direccion: string;
  telefono: string;
  perfil: UserPerfil;
}
