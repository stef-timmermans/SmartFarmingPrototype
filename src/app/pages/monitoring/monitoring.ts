import { Component } from '@angular/core';
import {NzListComponent, NzListItemComponent} from 'ng-zorro-antd/list';
import {NzCollapseComponent, NzCollapsePanelComponent} from 'ng-zorro-antd/collapse';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-monitoring',
  imports: [
    NzListComponent,
    NzListItemComponent,
    NzCollapsePanelComponent,
    NgForOf,
    NzCollapseComponent
  ],
  templateUrl: './monitoring.html',
  styleUrl: './monitoring.css'
})
export class Monitoring {

}
