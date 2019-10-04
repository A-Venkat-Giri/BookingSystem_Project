import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AdminServiceService} from '../admin-service.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  adminId:number;
  password:String;
  constructor(private router: Router,private adminService: AdminServiceService) { }

  

  ngOnInit() {
  }

  adminForm(loginAdmin : NgForm)
  {
   
    console.log(loginAdmin.value);
    console.log("Ibrahim Khan");
    this.adminService.login(loginAdmin.value).subscribe(data =>
      {
if(data!=null)
{
  console.log(data);
  this.router.navigate(['/admin'])
  
}
else{
  console.log(data)
  // console.log("NO Output");
  alert("ENTER CORRECT CREDENTAILS");
  loginAdmin.reset();
     }
      }
    )
  
  }
  
  }
