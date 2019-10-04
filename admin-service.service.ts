import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  backendUrl = 'http://localhost:8080/BusBookingSystem_SpringRest/admin';
  constructor(private http:HttpClient) { }
 
//  CREATE BUS VERIFIED
  loginPage(bus)
  {
      
    return this.http.post(`${this.backendUrl}/rest/bus/create`,bus)         
  }
  // VERIFIED
  update(bus)
  {
    return this.http.put(`${this.backendUrl}/rest/bus/update`,bus)   
  }
  // DO NOT CHECk
  busBetweenValue(source,destination)
  {
    return this.http.get(`${this.backendUrl}/rest/admin/${source}/${destination}`)   
  }
  // CROS POLICY
  delete(busId,password)
  {
    // console.log("service" , bus);
    return this.http.delete(`${this.backendUrl}/rest/bus/delete/${busId}/${password}`) 
  }
// VERIFIED
  login(data)
  
  {
    console.log("I'm Admin");
    return this.http.post(`${this.backendUrl}/rest/admin/login`,data)  
    
  }
  // NOT CHECKED
  feedback(bus)
  {
    return this.http.get(`${this.backendUrl}/rest/admin/show-feedback`,bus)
  }
  
}
