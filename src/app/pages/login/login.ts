import { Component } from '@angular/core';
import { LoginForm} from '../../elements/login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
