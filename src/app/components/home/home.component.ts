import { Component, OnInit } from '@angular/core';
import { forecast } from 'src/app/models/forecast.model';
import { WeatherService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private PhiladelphiaKey: string = '';
  public currentTemperature: string = '';
  public currentTemperatureUnit: string = '';
  public currentCondition: string = '';
  public weatherText: string = '';
  public detailsLink: string = '';
  public weatherIcon: string = '';
  public dailyForecasts: Array<forecast> = [];


  constructor(private weatherService: WeatherService) { 
    
  }

  ngOnInit(): void {
    this.weatherService.getPhiladelphiaInfo().subscribe(data => {
      const response = data[0];
      this.PhiladelphiaKey = response.ParentCity.Key;
      this.weatherService.getPhiladelphiaWeather(this.PhiladelphiaKey).subscribe(weather => {
        const PhiladelphiaWeather = weather[0];

        this.currentCondition = PhiladelphiaWeather.WeatherText;
        this.currentTemperature = PhiladelphiaWeather.Temperature.Imperial.Value;
        this.currentTemperatureUnit = PhiladelphiaWeather.Temperature.Imperial.Unit;
        this.detailsLink = PhiladelphiaWeather.Link;
        if (PhiladelphiaWeather.WeatherIcon < 10) {
          this.weatherIcon = '0' + PhiladelphiaWeather.WeatherIcon;
        }
        else this.weatherIcon = PhiladelphiaWeather.WeatherIcon;
        this.weatherText = PhiladelphiaWeather.WeatherText;
        console.log(weather)
        console.log(this.currentTemperature)
        
      });

      this.weatherService.getFiveDayForecast(this.PhiladelphiaKey).subscribe(forecast => {
        this.dailyForecasts = forecast.DailyForecasts;
        console.log(this.dailyForecasts)
      })
    })
  }

}
