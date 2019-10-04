import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-feedabck',
  templateUrl: './show-feedabck.component.html',
  styleUrls: ['./show-feedabck.component.css']
})
export class ShowFeedabckComponent implements OnInit {
  selectviewallassets = {
    busId:null,
    source:null,
    destination:null,
    date:null,
    numOfSeats:null,
   userId:null
  }
  constructor() { }

  ngOnInit() {
  }
  selectViewallassets(viewallassets){
    console.log(viewallassets);
    this.selectviewallassets=viewallassets;
   }

}
