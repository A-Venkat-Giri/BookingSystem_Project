import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{AdminServiceService} from '../admin-service.service'


@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.css']
})
export class GiveFeedbackComponent implements OnInit  {

  constructor(private router: Router,private adminService: AdminServiceService) { }

  ngOnInit() {
  }
  printForm(feedbackForm : NgForm)
  {
    this.router.navigate(['/userfunctions'])
    this.adminService.feedback(feedbackForm.value).subscribe(bus =>
      {

      }
    )
  
  }
  

 

}
