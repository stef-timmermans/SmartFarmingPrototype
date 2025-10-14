import { Component } from '@angular/core';
import {NzListComponent, NzListItemComponent} from 'ng-zorro-antd/list';
import {NzCollapseComponent, NzCollapsePanelComponent} from 'ng-zorro-antd/collapse';

@Component({
  selector: 'app-monitoring',
  imports: [
    NzListComponent,
    NzListItemComponent,
    NzCollapsePanelComponent,
    NzCollapseComponent
  ],
  templateUrl: './monitoring.html',
  styleUrl: './monitoring.css'
})
export class Monitoring {

}
