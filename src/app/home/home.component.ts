import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flights:any = [];
  launchYear:any = '';
  launch:any = null;
  landing:any = null;
  years:number[] = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];

  constructor(private apiSerive: ApiServiceService) { }

  ngOnInit(): void {
    this.apiSerive.getFlights().subscribe(
      data=>{
        this.flights = data
      },
      error => {
        console.log('Error in fetching flights.');
      }
    )
  }
  getYear(event: any){
    this.launchYear = event.currentTarget.value;
  }
  getSuccessLaunch(event: any){
    this.launch = event.currentTarget.value;
  }
  getSuccessLanding(event: any){
    this.landing = event.currentTarget.value;
  }
  filterFlights(){
    this.apiSerive.getFilterFlights(this.launchYear, this.launch, this.landing).subscribe(
      data=>{
        this.flights = data
      },
      error => {
        console.log('Error in fetching flights.');
      }
    )
  }    
}
