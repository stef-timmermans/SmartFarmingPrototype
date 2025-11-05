import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class Maintenance {
  isMaintenanceActive = false;

  constructor(
    private router: Router,
    private notification: NzNotificationService
  ) {}

  async startMaintenance() {
    if (this.isMaintenanceActive) return;

    this.isMaintenanceActive = true;

    // Navigate to /login
    this.router.navigate(['/login']);
    this.notification.warning(
      'System Maintenance Has Started',
      'The system is currently under maintenance for 1 minute. You have been logged out. Please try again later.',
      { nzDuration: 6000 }
    );

    // End maintenance after 1 minute
    // This fulfills TNF-S2.4
    await new Promise(resolve => setTimeout(resolve, 60000));
    this.isMaintenanceActive = false;

    this.notification.success(
      'System Restored',
      'Maintenance complete. The system is now back online.',
      { nzDuration: 6000 }
    );
  }
}
