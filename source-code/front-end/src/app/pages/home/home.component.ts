import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  dataSource: any[] = [];
  listView: any[] = [];
  viewType: number = 0;

  constructor() {
    this.viewType = 1;

    this.listView = [
      {
        value: 1,
        unit: 'Tháng',
        max: 12
      },
      {
        value: 2,
        unit: 'Quý',
        max: 4
      },
      {
        value: 3,
        unit: 'Năm',
        max: 8
      }
    ]

    this.dataSource = this.buildMockData();
  }

  /**
   * Hanlde build mock data
   */
  buildMockData(): any[] {
    let viewChart = this.listView.find(item => item.value == this.viewType);
    const result = [];
    for (let i = 1; i <= viewChart.max; i++) {

      const item = {
        time: `${viewChart.unit} ${viewChart.value == 3 ? 2018 + i : i}`,
        employee: this.randomIntFromInterval(10, 100)
      }
      result.push(item);
    }
    return result;
  }


  onTimeUnitChanged() {
    this.dataSource = this.buildMockData();
1  }

  randomIntFromInterval(min: number = 0, max: number = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
