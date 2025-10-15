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

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [
    NzListComponent,
    NzListItemComponent,
    NzCollapsePanelComponent,
    NzCollapseComponent,
    NgApexchartsModule
  ],
  templateUrl: './monitoring.html',
  styleUrl: './monitoring.css'
})
export class Monitoring {
  private days: string[];

  public phOptions!: ChartOptions;
  public nitrogenOptions!: ChartOptions;
  public moistureOptions!: ChartOptions;
  public salinityOptions!: ChartOptions;

  constructor() {
    // Generate last 14 days ending on 29 October 2025
    const end = new Date(2025, 9, 29);
    const labels: string[] = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(end);
      d.setDate(end.getDate() - i);
      labels.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    this.days = labels;

    // common formatter to show every 3rd label
    const labelFormatter = (val: string) => {
      const index = this.days.indexOf(val);
      return index % 3 === 0 ? val : '';
    };

    this.phOptions = {
      series: [{ name: 'pH', data: [6.5, 6.7, 6.8, 6.9, 7.0, 6.8, 6.7, 6.6, 6.9, 7.1, 7.0, 6.8, 6.7, 6.9] }],
      chart: { type: 'line', height: 200 },
      stroke: { curve: 'smooth' },
      xaxis: { categories: this.days, labels: { formatter: labelFormatter } },
      title: { text: 'pH Levels', align: 'left' },
      yaxis: { title: { text: 'pH' } },
      tooltip: { y: { formatter: val => val.toString() } }
    };

    this.nitrogenOptions = {
      series: [{ name: 'Nitrogen', data: [20, 25, 22, 28, 24, 26, 30, 27, 23, 25, 29, 24, 26, 28] }],
      chart: { type: 'line', height: 200 },
      stroke: { curve: 'smooth' },
      xaxis: { categories: this.days, labels: { formatter: labelFormatter } },
      title: { text: 'Nitrogen Levels', align: 'left' },
      yaxis: { title: { text: 'ppm' } },
      tooltip: { y: { formatter: val => `${val} ppm` } }
    };

    this.moistureOptions = {
      series: [{ name: 'Moisture', data: [40, 42, 39, 44, 48, 46, 43, 41, 45, 47, 42, 44, 46, 43] }],
      chart: { type: 'line', height: 200 },
      stroke: { curve: 'smooth' },
      xaxis: { categories: this.days, labels: { formatter: labelFormatter } },
      title: { text: 'Moisture Levels', align: 'left' },
      yaxis: { title: { text: '%' } },
      tooltip: { y: { formatter: val => `${val}%` } }
    };

    this.salinityOptions = {
      series: [{ name: 'Salinity', data: [1.2, 1.3, 1.25, 1.4, 1.35, 1.3, 1.28, 1.26, 1.3, 1.32, 1.33, 1.29, 1.31, 1.34] }],
      chart: { type: 'line', height: 200 },
      stroke: { curve: 'smooth' },
      xaxis: { categories: this.days, labels: { formatter: labelFormatter } },
      title: { text: 'Salinity Levels', align: 'left' },
      yaxis: { title: { text: 'dS/m' } },
      tooltip: { y: { formatter: val => `${val} dS/m` } }
    };
  }
}
