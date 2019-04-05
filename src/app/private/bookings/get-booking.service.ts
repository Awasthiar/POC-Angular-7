import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBookingService {

  constructor(private http: HttpClient){}

 
getUpcoming() {
  return this.http.get('http://localhost:3000/Upcoming');
  }
  
getPast() {
  return this.http.get('http://localhost:3000/Past');
  }
  
  }

