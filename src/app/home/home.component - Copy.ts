import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flights:any = [];
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
  filterFlightsByYear(val:any){    
    var launchYear = val;
    if(launchYear != ''){
      this.apiSerive.getFlightsByYear(launchYear).subscribe(
        data=>{
          this.flights = data
        },
        error => {
          console.log('Error in fetching flights.');
        }
      )
    }
  }
  filterFlightsByLaunch(val:any){    
    var launchYear = val;    
    this.apiSerive.getFlightsByLaunch(launchYear).subscribe(
      data=>{
        this.flights = data
      },
      error => {
        console.log('Error in fetching flights.');
      }
    )    
  }
  filterFlightsByLanding(val:any){    
    var launchYear = val;
    this.apiSerive.getFlightsByLanding(launchYear).subscribe(
      data=>{
        this.flights = data
      },
      error => {
        console.log('Error in fetching flights.');
      }
    )
  }
}
