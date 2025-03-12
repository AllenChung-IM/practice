import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-exercise28',
  standalone: true,
  imports: [],
  templateUrl: './exercise28.component.html',
  styleUrl: './exercise28.component.scss'
})
export class Exercise28Component {
  chartArray = [
    {
      id: 'A',
      label: ['年紀', '是否是男生'],
      data: [20, 25],
      backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)',]
    },
    {
      id: 'B',
      label: ['套餐A', '套餐B', '套餐C'],
      data: [2, 50, 25],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(86, 255, 190)']
    },
  ]

  ngOnInit(): void {
    // 獲取 canvas 元素
    let ctx = document.getElementById('chart') as HTMLCanvasElement;

    // 設定數據
    let data = {
      // x 軸文字
      labels: ['餐費', '交通費', '租金'],
      datasets: [
        {
          // 上方分類文字
          label: '支出比',
          // 數據
          data: [12000, 3000, 9000],
          // 線與邊框顏色
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          //設定hover時的偏移量，滑鼠移上去表會偏移，方便觀看選種的項目
          hoverOffset: 4,
        },
      ],
    };

    // 創建圖表
    new Chart(ctx, {
      //pie是圓餅圖,doughnut是環狀圖
      type: 'pie',
      data: data,
    });
  }

  ngAfterViewInit(): void {
    for (let i = 0; i < this.chartArray.length; i++) {
      let chart = this.chartArray[i];
      let ctx = document.getElementById(chart.id) as HTMLCanvasElement;

      if (ctx) {
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: chart.label,
            datasets: [
              {
                label: '',
                data: chart.data,
                backgroundColor: chart.backgroundColor,
                hoverOffset: 4,
              },
            ],
          },
        });
      }
    }
  }
}
