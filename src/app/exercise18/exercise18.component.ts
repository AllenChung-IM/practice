import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../@http-services/http.service';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-exercise18',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './exercise18.component.html',
  styleUrl: './exercise18.component.scss'
})
export class Exercise18Component {
  weatherData: any;
  dataSetDescription!: string;
  locationsName!: string;
  chooseLocation!: string;
  chooseElement!: string;
  chooseData!: any;
  chart!: Chart;

  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-DC50DB1F-8DAE-43C7-BD63-B75CDC800BB6&limit=10&format=JSON')
    .subscribe((res) => {
      this.weatherData = res;
      this.dataSetDescription = this.weatherData.records.Locations[0].DatasetDescription;
      this.locationsName = this.weatherData.records.Locations[0].LocationsName;
      this.chooseLocation = this.weatherData.records.Locations[0].Location[0].LocationName;
      this.chooseElement = this.weatherData.records.Locations[0].Location[0].WeatherElement[0].ElementName;
      this.chooseData = this.weatherData.records.Locations[0].Location[0].WeatherElement[0];
      console.log(this.weatherData);
    })
  }

  changeLocation(location: any) {
    this.chooseLocation = location.LocationName;
    for (let weatherElement of location.WeatherElement) {
      if (weatherElement.ElementName == this.chooseElement) {
        this.chooseData = weatherElement;
        this.drawChart();
    }
    }
  }

  changeElement(weatherElement: any) {
    this.chooseElement = weatherElement.ElementName;
    this.chooseData = weatherElement;
    this.drawChart();
  }

  ngAfterViewInit() {
    this.drawChart();
  }

  drawChart() {
    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    const chartRegion = document.getElementById('chartRegion') as HTMLDivElement;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('無法獲取 2D 繪圖上下文');
      return;
    }

    canvas.height = 205;

    let yAxis = this.chooseData.Time.map((data: any) => {
      const element = data.ElementValue?.[0];
      if (element.ComfortIndexDescription || element.WindDirection || element.Weather || element.WeatherDescription) {
        return null;
      } else {
        return element.Temperature ??
               element.DewPoint ??
               element.RelativeHumidity ??
               element.ApparentTemperature ??
               element.WindSpeed ??
               element.ProbabilityOfPrecipitation;
      }
    });

    const isAllNull = yAxis.every((value: number | null) => value === null);

    if (isAllNull) {
      if (this.chart) {
        this.chart.destroy();
      }
      chartRegion.style.display = "none";
      return;
    } else {
      chartRegion.style.display = "block";
    };

    canvas.style.display = 'block';

    let xAxis = this.chooseData.Time.map((data: any) => {
      if (data.DataTime) {
        return new Date(data.DataTime).toLocaleString('zh-TW', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
        });
      } else if (data.StartTime) {
        return new Date(data.StartTime).toLocaleString('zh-TW', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
        });
      }
      return '';
    });

    let data = {
      labels: xAxis,
      datasets: [
        {
          label: this.chooseElement,
          data: yAxis,
          borderColor: 'rgb(13, 110, 253)',
          fill: true,
          tension: 0.1,
        },
      ],
    };

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: data,
    });
  }
}
