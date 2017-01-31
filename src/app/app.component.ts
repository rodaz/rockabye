import { Component, OnInit } from '@angular/core';
import { Car } from './shared/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'App works!';

  cars: Car[];

  ngOnInit() {
    this.cars = [
      <Car>{price:41,brand:"Jaguar",year:1998,color:"White"},
      <Car>{price:58,brand:"Jaguar",year:1985,color:"Green"},
      <Car>{price:96,brand:"Jaguar",year:1979,color:"Silver"},
      <Car>{price:52,brand:"Audi",year:1970,color:"Black"},
      <Car>{price:74,brand:"Audi",year:1992,color:"Red"},
      <Car>{price:21,brand:"Audi",year:1993,color:"Maroon"},
      <Car>{price:45,brand:"Audi",year:1964,color:"Blue"}
    ];
  }

  calculateGroupTotal(brand: string) {
        let total = 0;

        if(this.cars) {
            for(let car of this.cars) {
                if(car.brand === brand) {
                    total += car.price;
                }
            }
        }

        return total;
    }

}
