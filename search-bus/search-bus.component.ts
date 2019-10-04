import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{UserServiceService} from '../user-service.service'
@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  show = false;
  Buses:any;
  constructor(private router: Router,private userService: UserServiceService) { }

  ngOnInit() {
  }
  user(source , destination , date)
  {
    // this.router.navigate(['./bookticket'])
    console.log(source , destination , date);
    this.userService.searchBus(source , destination , date).subscribe(data=>
      {
        console.log("data bus are " , data);
        this.show = true;
        this.Buses = data;
      }
    )
  

  }
  selectBus(){
        this.router.navigate(['./bookticket'])
  }
}
