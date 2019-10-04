import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{AdminServiceService} from '../admin-service.service'
@Component({
  selector: 'app-delete-bus',
  templateUrl: './delete-bus.component.html',
  styleUrls: ['./delete-bus.component.css']
})
export class DeleteBusComponent implements OnInit {

  constructor(private router: Router,private adminService: AdminServiceService) { }

  ngOnInit() {
  }
  delete(busId,password)
  {
    console.log(password)
    // console.log(deleteBus.value);
    this.adminService.delete(busId,password).subscribe(bus =>
      {
        if(bus!=null)
        {
          console.log(bus);
          alert("DELETED");
          this.router.navigate(['/admin'])
          
        }
        else{
          console.log(bus)
          // console.log("NO Output");
          alert("ENTER CORRECT CREDENTAILS");
          // deleteBus.reset();
             }
      }
    )
  
  }
}
