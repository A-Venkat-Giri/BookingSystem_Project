import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import{AdminServiceService} from '../admin-service.service'
@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  constructor(private router: Router,private adminService: AdminServiceService) { }

  ngOnInit() {
  }
  update(updateBus:NgForm)
  {
    this.adminService.update(updateBus.value).subscribe(bus =>
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
          updateBus.reset();
             }
      }
    )
  
  }
  
}
