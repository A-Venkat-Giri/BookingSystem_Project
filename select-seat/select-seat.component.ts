// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-select-seat',
//   templateUrl: './select-seat.component.html',
//   styleUrls: ['./select-seat.component.css']
// })
// export class SelectSeatComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Seat } from '../models/seat.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit ,OnDestroy{
  seat:Seat[] = [];
  fare=600;
  total;
  class:String;
  fillupSeats:[];
  decreaseSeats:[];
  seatNo:null;
  
  getallseats = {
   seatNo:null,
   fare:null,
   seatClass:null,
  }

  
  getallSeats(getseats){
    console.log(getseats);
    this.getallseats=getseats;
  }

  
  Seat(seatNumber){
    this.seat.push(seatNumber)
    console.log(this.seat)
    console.log(this.seat.length)
    if(this.seat.length>0 ){
     this.total=this.fare*this.seat.length;
    }
  }



  constructor(private userservice:UserServiceService) { }

  ngOnInit() {
  }

  
  ngOnDestroy(){
  }

} 

