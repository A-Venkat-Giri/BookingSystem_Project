import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{UserServiceService} from '../user-service.service'
@Component({
  selector: 'app-get-all-ticket',
  templateUrl: './get-all-ticket.component.html',
  styleUrls: ['./get-all-ticket.component.css']
})
export class GetAllTicketComponent implements OnInit {

  constructor(private router: Router,private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getAllTicket();
  }

}
