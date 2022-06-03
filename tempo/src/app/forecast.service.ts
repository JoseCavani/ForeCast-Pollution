import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  getPollution(){
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position)
        },
        (error) =>{
          observer.next(error)
        }
      )
    }).pipe(
      map ((value:any)=> {
        return new HttpParams()
        .set('lat', value.coords.latitude)
        .set('lon', value.coords.longitude)
        .set('appid', 'bc93fb691907d0c9163732716afcb58d')
      }),
      switchMap((values)=>{
        return this.http.get('http://api.openweathermap.org/data/2.5/air_pollution', {params: values})
      })
    )
  }
  
  
  



getWeatherForecast(){
  return new Observable((observer) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        observer.next(position)
      },
      (error) =>{
        observer.next(error)
      }
    )
  }).pipe(
    map ((value:any)=> {
      return new HttpParams()
      .set('lat', value.coords.latitude)
      .set('lon', value.coords.longitude)
      .set('units', 'metric')
      .set('appid', 'bc93fb691907d0c9163732716afcb58d')
    }),
    switchMap((values)=>{
      return this.http.get('http://api.openweathermap.org//data/2.5/forecast', {params: values})
    })
  )
}

}
