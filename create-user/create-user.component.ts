import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{UserServiceService} from '../user-service.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private router: Router,private userService: UserServiceService) { }

  ngOnInit() {
  }
  user(createUser:NgForm)
  {
    
    this.userService.userCreation(createUser.value).subscribe(data=>
      {
        if(data!=null)
        {
          console.log(data);
          alert("DATA INSERTED NOW LOGIN AND BOOK THE TICKET");
          this.router.navigate([''])
        }
        else{
          console.log(data)
          // console.log("NO Output");
          alert("ENTER CORRECT CREDENTAILS");
          createUser.reset();
             }

      }
    )
  }
}
