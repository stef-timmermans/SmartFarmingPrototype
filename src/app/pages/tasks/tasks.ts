import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { NzListComponent, NzListItemComponent } from 'ng-zorro-antd/list';
import { NzCollapseComponent, NzCollapsePanelComponent } from 'ng-zorro-antd/collapse';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    NzFormModule,
    NzListComponent,
    NzListItemComponent,
    NzCollapseComponent,
    NzCollapsePanelComponent,
    NzButtonComponent,
    NzInputDirective
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  fertilizerTasks = [
    { name: 'Fertilizing – Valve #1', time: '08:00' },
    { name: 'Fertilizing – Valve #2', time: '10:30' },
    { name: 'Fertilizing – Valve #3', time: '13:00' }
  ];

  showAddTaskForm = false;
  newTaskName = '';
  newTaskTime = '';

  addTask() {
    this.fertilizerTasks.push({
      name: this.newTaskName,
      time: this.newTaskTime
    });

    // reset form
    this.newTaskName = '';
    this.newTaskTime = '';
    this.showAddTaskForm = false;
  }
}
