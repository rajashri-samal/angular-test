import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  
  getFlights():Observable<any>{
    return this.http.get<any>('https://api.spacexdata.com/v3/launches?limit=10');
  }
  getFilterFlights(year:any, launch:any, landing:any):Observable<any>{
    var queryString = '';
    if(year!='' && year!='All')
      queryString += `&launch_year=${year}`;
    if(launch!=null && launch!='All')  
      queryString += `&launch_success=${launch}`;
    if(landing!=null && landing!='All')  
      queryString += `&land_success=${landing}`;
    
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches?limit=100'+queryString);
  }
  getFlightsByYear(year:any):Observable<any>{
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches?limit=100&launch_year='+year);
  }
  getFlightsByLaunch(launch:any):Observable<any>{
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+launch);
  }
  getFlightsByLanding(lading:any):Observable<any>{
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches?limit=100&landing_success='+lading);
  }
}
