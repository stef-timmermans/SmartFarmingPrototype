import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Monitoring} from './pages/monitoring/monitoring';
import { Tasks } from './pages/tasks/tasks';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'monitoring', component: Monitoring },
  { path: 'tasks', component: Tasks },
  { path: '**', redirectTo: 'login' }
];
