import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise20',
  standalone:true,
  imports: [],
  templateUrl: './exercise20.component.html',
  styleUrl: './exercise20.component.scss'
})
export class Exercise20Component {
  ELEMENT_DATA_LightToHeavy: any[] = [
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  ];
  ELEMENT_DATA_HeavyToLight: any[] = [
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  ];

  ngOnInit(): void {
    this.ELEMENT_DATA_LightToHeavy.sort(function (a, b) {
      if (a.weight < b.weight) {
        return -1;
      }
      if (a.weight > b.weight) {
        return 1;
      }
      return 0;
      });
    console.log(this.ELEMENT_DATA_LightToHeavy);

    this.ELEMENT_DATA_HeavyToLight.sort(function (a, b) {
      if (a.weight < b.weight) {
        return 1;
      }
      if (a.weight > b.weight) {
        return -1;
      }
      return 0;
      });
    console.log(this.ELEMENT_DATA_HeavyToLight);
  }


}
