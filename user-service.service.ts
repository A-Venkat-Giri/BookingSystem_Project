import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  viewallassets:any = {
    bookingId: null,
    busId: null,
    date: null,
    destination: null,
    numOfSeats: null,
    source: null,
    userId: null
  }
  viewallticket:any;
  checkavailability:any;
  backendUrl = 'http://localhost:8080/BusBookingSystem_SpringRest/user';
  constructor(private http:HttpClient) { }
  Assests : any[]

// DNT CHECK
  getAllocation(bookingId ){
    return this.http.get(`${this.backendUrl}/printticket/${bookingId}`)
    .subscribe(resData=>{
     console.log(resData);
     this.viewallassets=resData
     console.log(this.viewallassets);
    })
  }
  // getData(){
  //   return this.http.get(`${this.backendUrl}/allasset`)
  //   .subscribe(resData=>{

  //    console.log(resData);
      
  //   })
  // }

  // DNT CHECK  wronggg in daoo
  getAllTicket(){
    return this.http.get(`${this.backendUrl}/get/all-tickets/userId`)
    .subscribe(resData=>{
      
     console.log(resData);
     console.log(resData);
     this.viewallticket=resData
     console.log(this.viewallticket);
    })
  }

  // VERIFIED
  userCreation(data){
    return this.http.post(`${this.backendUrl}/create`,data) 
  }
  // VErified url problem.....
  userUpdate(data)
  {
    return this.http.post(`${this.backendUrl}/updateuser`,data)
  }

  // CORS
  userDelete(userId,password)
  
  {
    return this.http.delete(`${this.backendUrl}/delete/${userId}/${password}`)
  }
  // VERIFIED
  userLogin(data)
  {
    console.log(data)
    return this.http.post(`${this.backendUrl}/login`,data)
  }
  // CORS
  searchBus(source , destination , date)
  {
    console.log(`${this.backendUrl}/search/bus/${source}/${destination}/${date}`)
    console.log(source);
    return this.http.get(`${this.backendUrl}/search/bus/${source}/${destination}/${date}`)
  }
  // VERIFIED
  bookTickets(data)
  {
    return this.http.post(`${this.backendUrl}/book/ticket`,data)
  }
  // CROS ERROr
  ticketCancel(bookingId)
  {
    return this.http.delete(`${this.backendUrl}/cancel/ticket/${bookingId}`) 
  }


  availabality(bus_id,journeyDate)
  {
    return this.http.get(`${this.backendUrl}/check-availability/${bus_id}/${journeyDate}`)
    .subscribe(resData=>{
      
     console.log(resData);
     console.log(resData);
     this.checkavailability=resData
     console.log(this.availabality);
    })
  }
  // checkAvailability()
  // {
  //   return this.http.get(`${this.backendUrl}/checkAvailibility`)
  //   .subscribe(resData=>{
      
  //    console.log(resData);
  //    console.log(resData);
  //    this.checkavailability=resData
  //    console.log(this.checkavailability);
  //   })
  // } 


}
