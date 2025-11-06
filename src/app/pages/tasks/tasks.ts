import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgClass, NgFor, NgIf} from '@angular/common';
import { NzListComponent, NzListItemComponent } from 'ng-zorro-antd/list';
import { NzCollapseComponent, NzCollapsePanelComponent } from 'ng-zorro-antd/collapse';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';

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
    NzInputDirective,
    NzSelectModule,
    NgClass
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  fertilizerTasks = [
    { name: 'Fertilizing – Valve #1', time: '08:00', status: 'completed' },
    { name: 'Fertilizing – Valve #2', time: '10:30', status: 'completed' },
    { name: 'Fertilizing – Valve #3', time: '13:00', status: 'completed' }
  ];

  showAddTaskForm = false;
  newTaskType = '';
  newTaskName = '';
  newTaskTime = '';

  get fertilizerPendingCount(): number {
    return this.fertilizerTasks.filter(t => t.status === 'scheduled').length;
  }

  addTask() {
    if (this.newTaskName && this.newTaskTime) {
      this.fertilizerTasks.push({
        name: this.newTaskName,
        time: this.newTaskTime,
        status: 'scheduled'
      });

      this.newTaskType = '';
      this.newTaskName = '';
      this.newTaskTime = '';
      this.showAddTaskForm = false;
    }
  }
}
