import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{UserServiceService} from '../user-service.service'
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private router: Router,private userService: UserServiceService) { }

  ngOnInit() {
  }
  user(loginUser:NgForm)
  {
    
    this.userService.userLogin(loginUser.value).subscribe(data=>
      {
        if(data!=null)
        {
          console.log(data);
          this.router.navigate(['/userfunctions'])
          
        }
        else{
          console.log(data)
          // console.log("NO Output");
          alert("ENTER CORRECT CREDENTAILS");
          loginUser.reset();
             }
      }
    )
  }
}
