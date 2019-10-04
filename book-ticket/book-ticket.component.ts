import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{UserServiceService} from '../user-service.service'
@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  constructor(private router: Router,private userService: UserServiceService) { }

  ngOnInit() {
  }
  user(bookTicket:NgForm)
  {
    
    this.router.navigate(['/userfunctions'])
    this.userService.bookTickets(bookTicket.value).subscribe(data=>
      {
      
      }
    )
  }
}
