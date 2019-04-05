import { Component, OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { RegisterUserService } from 'src/app/home/register/register-user.service';
import {Router} from '@angular/router';
import {passwordValidator} from './passwordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
        
  //@Input() userDetails = { firstname: '',lastname:'', email: '', phone:'', address:'', medical_history:'',pwd:'',confirmPassword:'' }

  constructor( private fb:FormBuilder,public RegisterUserService: RegisterUserService, public router: Router) { 

    this.registerForm = fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      address: ['',Validators.required],
      medical_history: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',[Validators.required]],},
      { Validators:passwordValidator});
    
  }
  get f(){return this.registerForm.controls;}
  ngOnInit() {}

  register(){

    if(this.registerForm.valid)
    {
      console.log(this.registerForm.value);

      this.RegisterUserService.registerDetails(this.registerForm.value).subscribe();
      this.router.navigate(['/login']);
    }

    else
    alert("fill the valid fields to proceed");

  }

  }
  


