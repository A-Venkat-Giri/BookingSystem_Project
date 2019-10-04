import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{UserServiceService} from '../user-service.service'
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private router: Router,private userService: UserServiceService) { }

  ngOnInit() {
  }
  user(updateUser:NgForm)
  {
    this.userService.userUpdate(updateUser.value).subscribe(data=>
      {

      }
    )
  }
}
