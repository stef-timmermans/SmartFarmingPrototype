import { Component } from '@angular/core';
import { NzListComponent, NzListItemComponent } from 'ng-zorro-antd/list';
import { NzCollapseComponent, NzCollapsePanelComponent } from 'ng-zorro-antd/collapse';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NzListComponent,
    NzListItemComponent,
    NzCollapseComponent,
    NzCollapsePanelComponent,
    NzTagComponent
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {}
