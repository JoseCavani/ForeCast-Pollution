import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css']
})
export class PollutionComponent implements OnInit {

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getPollution().subscribe(data=>{
      this.getTodayPollution(data)
    })
  }


  timelinePollution:any =[];
  Pollution:any;
  PollutionIndex:number;


  getTodayPollution(pollute:any){
    for (const pollution of pollute.list.slice(0,8)) {
      this.timelinePollution.push({
        co : pollution.components.co,
        no : pollution.components.no,
        no2 :  pollution.components.no2,
        o3 :  pollution.components.o3
    });
    this.Pollution = pollution;
    this.PollutionIndex = this.Pollution.main.aqi;

    }
  

  }

}
