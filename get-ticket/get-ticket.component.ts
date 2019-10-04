import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{UserServiceService} from '../user-service.service'
@Component({
  selector: 'app-get-ticket',
  templateUrl: './get-ticket.component.html',
  styleUrls: ['./get-ticket.component.css']
})
export class GetTicketComponent implements OnInit {
 
  selectviewallassets = {
    busId:null,
	  source:null,
  	destination:null,
    date:null,
	  numOfSeats:null,
   userId:null
  }
  isShowable = false;
  constructor(private router: Router,private userService: UserServiceService) { }

  ngOnInit() {
    // this.userService.getAllocation(bookingId.value)
  }
  
  user( bookingId)
  {
    console.log(bookingId);
    this.userService.getAllocation(bookingId)
    this.isShowable = true;
    // this.router.navigate(['/userfunctions'])
  }

  //  selectViewallassets(viewallassets){
  //   console.log(viewallassets);
  //   this.selectviewallassets=viewallassets;
  //  }
}
