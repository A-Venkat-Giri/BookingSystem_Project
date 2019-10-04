import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{AdminServiceService} from '../admin-service.service'
@Component({
  selector: 'app-bus-between',
  templateUrl: './bus-between.component.html',
  styleUrls: ['./bus-between.component.css']
})
export class BusBetweenComponent implements OnInit {

  constructor(private router: Router,private adminService: AdminServiceService) { }

  ngOnInit() {
  }
  update(source,destination)
  {
    this.adminService.busBetweenValue(source,destination).subscribe(bus =>
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
          
             }
      }
    )
  
  }
}
