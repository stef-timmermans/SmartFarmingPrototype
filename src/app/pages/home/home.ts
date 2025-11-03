import { Component } from '@angular/core';
import { Maintenance} from '../../services/maintenance';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private maintenance: Maintenance) {}

  triggerMaintenance() {
    let promise = this.maintenance.startMaintenance();
  }
}
