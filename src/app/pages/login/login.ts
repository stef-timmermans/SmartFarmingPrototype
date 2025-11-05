import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm} from '../../elements/login-form/login-form.component';
import { Maintenance} from '../../services/maintenance';
import { NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  imports: [LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private router = inject(Router);
  private maintenance = inject(Maintenance);
  private notification = new NzNotificationService();

  onLoginSuccess() {
    if (this.maintenance.isMaintenanceActive) {
      this.notification.warning(
        'Maintenance in Progress',
        'The system is currently under maintenance. Please try again soon.',
        { nzDuration: 6000 }
      );
      return;
    }

    this.router.navigate(['/home']);
  }
}
