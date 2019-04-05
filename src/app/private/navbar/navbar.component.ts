import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 name:string;
  constructor(public router: Router) { }

  ngOnInit() {
    //total no of bookings
    
    this.name =localStorage.getItem("name");
    this.router.navigate(["private/navbar/profile"]);
  }

  logout(){
   localStorage.clear();
   this.router.navigate(["/login"]);
  }
}
