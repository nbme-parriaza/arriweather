import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getPhiladelphiaInfo().subscribe(data => {
      const response = data[0];
      console.log(response)
    })
  }

}
