import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Welcome } from './pages/welcome/welcome';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login },
  { path: 'welcome', component: Welcome },
  { path: '**', redirectTo: 'login' }
];
