import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{UserServiceService} from '../user-service.service'

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private router: Router,private userService: UserServiceService) { }

  ngOnInit() {
  }
  user(userId,password)
  {
    this.userService.userDelete(userId,password).subscribe(data=>
      {

      }
    )
  }
}
