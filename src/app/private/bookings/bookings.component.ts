import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GetBookingService } from './get-booking.service'; 

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(public router: Router,private getBookingService: GetBookingService) { }
  
    upcoming = true;
    upcomingBooking: any;
    pastBooking: any; 
  ngOnInit() {
   this.router.navigate(["private/navbar/bookings"]);
   this.showUpcoming(); 
  }
   showUpcoming() {
    this.upcoming = true;
    this.getBookingService.getUpcoming().subscribe(r => {
    this.upcomingBooking = r;
    });
  }
    
    showPast() {
    this.upcoming = false;
    this.getBookingService.getPast().subscribe(r => {
    this.pastBooking = r;
    });
    } 
  
  }


