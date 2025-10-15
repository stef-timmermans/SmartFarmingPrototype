import { Component } from '@angular/core';
import { NzListComponent, NzListItemComponent } from 'ng-zorro-antd/list';
import { NzCollapseComponent, NzCollapsePanelComponent } from 'ng-zorro-antd/collapse';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
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
  public chartOptions: ChartOptions = {
    series: [
      {
        name: 'Moisture',
        data: [10, 41, 35, 51, 49, 62, 69]
      }
    ],
    chart: {
      type: 'line',
      height: 200
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  };
}
