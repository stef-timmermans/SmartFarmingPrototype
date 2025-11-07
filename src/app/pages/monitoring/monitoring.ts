import { Component } from '@angular/core';
import { NzListComponent, NzListItemComponent } from 'ng-zorro-antd/list';
import { NzCollapseComponent, NzCollapsePanelComponent } from 'ng-zorro-antd/collapse';
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip
} from 'ng-apexcharts';
import {NgClass} from '@angular/common';
import {NzNotificationService} from 'ng-zorro-antd/notification';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  colors: string[];
};

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [
    NzListComponent,
    NzListItemComponent,
    NzCollapsePanelComponent,
    NzCollapseComponent,
    NgApexchartsModule,
    NgClass
  ],
  templateUrl: './monitoring.html',
  styleUrls: ['./monitoring.css']
})
export class Monitoring {
  private days: string[];

  public phOptions!: ChartOptions;
  public nitrogenOptions!: ChartOptions;
  public moistureOptions!: ChartOptions;
  public salinityOptions!: ChartOptions;

  constructor(private notification: NzNotificationService) {
    // Generate last 14 days ending on 29 October 2025
    const end = new Date(2025, 9, 29);
    const labels: string[] = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(end);
      d.setDate(end.getDate() - i);
      labels.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    this.days = labels;

    // show every 3rd label
    const labelFormatter = (val: string) => {
      const index = this.days.indexOf(val);
      return index % 3 === 0 ? val : '';
    };

    this.phOptions = {
      series: [{ name: 'pH', data: [6.5, 6.7, 6.8, 6.9, 7.0, 6.8, 6.7, 6.6, 6.9, 7.1, 7.0, 6.8, 6.7, 6.9] }],
      chart: { type: 'line', height: 200 },
      stroke: { curve: 'smooth' },
      colors: ['#22c55e'], // green
      xaxis: { categories: this.days, labels: { formatter: labelFormatter } },
      title: { text: 'pH Levels', align: 'left' },
      yaxis: { title: { text: 'pH' } },
      tooltip: { y: { formatter: val => val.toString() } }
    };

    this.nitrogenOptions = {
      series: [{ name: 'Nitrogen', data: [20, 25, 22, 28, 24, 26, 30, 27, 23, 25, 29, 24, 26, 28] }],
      chart: { type: 'line', height: 200 },
      stroke: { curve: 'smooth' },
      colors: ['#f97316'], // orange
      xaxis: { categories: this.days, labels: { formatter: labelFormatter } },
      title: { text: 'Nitrogen Levels', align: 'left' },
      yaxis: { title: { text: 'ppm' } },
      tooltip: { y: { formatter: val => `${val} ppm` } }
    };

    this.moistureOptions = {
      series: [{ name: 'Moisture', data: [40, 42, 39, 44, 48, 46, 43, 41, 45, 47, 42, 44, 46, 43] }],
      chart: { type: 'line', height: 200 },
      stroke: { curve: 'smooth' },
      colors: ['#3b82f6'], // blue
      xaxis: { categories: this.days, labels: { formatter: labelFormatter } },
      title: { text: 'Moisture Levels', align: 'left' },
      yaxis: { title: { text: '%' } },
      tooltip: { y: { formatter: val => `${val}%` } }
    };

    this.salinityOptions = {
      series: [{ name: 'Salinity', data: [1.2, 1.3, 1.25, 1.4, 1.35, 1.3, 1.28, 1.26, 1.3, 1.32, 1.33, 1.29, 1.31, 1.34] }],
      chart: { type: 'line', height: 200 },
      stroke: { curve: 'smooth' },
      colors: ['#8b5cf6'], // purple
      xaxis: { categories: this.days, labels: { formatter: labelFormatter } },
      title: { text: 'Salinity Levels', align: 'left' },
      yaxis: { title: { text: 'dS/m' } },
      tooltip: { y: { formatter: val => `${val} dS/m` } }
    };
  }

  sensor2Down = false;

  toggleSensor2() {
    setTimeout(() => {
      this.sensor2Down = !this.sensor2Down;

      if (this.sensor2Down) {
        this.notification.error(
          'Sensor Down in Zone 2A',
          'Sensor 2 (Zone 2A) was last detected a moment ago.',
          { nzDuration: 6000 }
        );
      } else {
        this.notification.success(
          'Sensor Restored in Zone 2A',
          'Sensor 2 (Zone 2A) is now operational.',
          { nzDuration: 6000 }
        );
      }
    },
      // Fulfills TNF-M1.2
      1000);
  }
}
