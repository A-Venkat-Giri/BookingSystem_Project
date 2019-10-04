import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{UserServiceService} from '../user-service.service'
@Component({
  selector: 'app-check-availability',
  templateUrl: './check-availability.component.html',
  styleUrls: ['./check-availability.component.css']
})
export class CheckAvailabilityComponent implements OnInit {

  constructor(private router: Router,private userService: UserServiceService) { }
  selectviewallassets = {
    busId:null,
	  source:null,
  	destination:null,
    date:null,
	  numOfSeats:null,
   userId:null
  }

  ngOnInit() {
  
  }
  // this.userService.getAllocation(bookingId.value)
  update(bus_id,journeyDate)
  {
    this.userService.availabality(bus_id,journeyDate)
    this.selectviewallassets
  }
 
}
