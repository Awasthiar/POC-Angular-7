import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { GetUserService } from 'src/app/home/login/get-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  posts:any;
  constructor(private fb:FormBuilder,public GetUserService: GetUserService, public router: Router) { 
  
    this.loginForm = fb.group({
      email: ['',Validators.required],
     
      password: ['',Validators.required],
      
      });
  }

  ngOnInit() {}

  //Checking only registered users can login
  login() {
    
    this.GetUserService.getDetails(this.loginForm.value).subscribe(response =>{
       
      if((Object.keys(response).length)==0){
        return;
      }

      else{
        var data = JSON.parse(JSON.stringify(response));
        localStorage.setItem('token',data[0].id.toString());
        localStorage.setItem('name',data[0].firstName);
        this.router.navigate(["private/navbar"]);
      }
      
  
    });
  }
  
  
}

