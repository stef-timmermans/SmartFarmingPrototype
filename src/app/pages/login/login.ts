import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm} from '../../elements/login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private router = inject(Router);

  onLoginSuccess() {
    this.router.navigate(['/home']);
  }
}
