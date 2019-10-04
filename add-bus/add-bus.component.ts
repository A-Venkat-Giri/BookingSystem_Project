import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{AdminServiceService} from '../admin-service.service'
// import { create } from 'domain';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  constructor(private router: Router,private adminService: AdminServiceService) { }

  ngOnInit() {
  }

  printForm(createBus: NgForm)
  {
    this.adminService.loginPage(createBus.value).subscribe(bus =>
      {
        if(bus!=null)
        {
          console.log(bus);
          this.router.navigate(['/admin'])
          
        }
        else{
          console.log(bus)
          // console.log("NO Output");
          alert("ENTER CORRECT CREDENTAILS");
          createBus.reset();
             }
      }
    )
  }
}
