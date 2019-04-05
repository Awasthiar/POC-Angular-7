import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { GetUserService } from 'src/app/home/login/get-user.service';
import {UpdateUserService} from 'src/app/private/profile/update-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  updateForm: FormGroup;
  id;  
  
  
 
  constructor(private fb:FormBuilder,public GetUserService: GetUserService,public UpdateUserService :UpdateUserService,public router: Router) {
    this.updateForm = fb.group({
      fullName: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      address: ['',Validators.required],
      medical_history: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
      });
  }
  get f(){return this.updateForm.controls;}

  ngOnInit() {
    
    this.id = localStorage.getItem('token');
    console.log(this.id);
    this.GetUserService.getDetails({"id":parseInt(this.id)}).subscribe(response => {
    var data = JSON.parse(JSON.stringify(response));
    this.updateForm.get('fullName').setValue((data[0]).firstName+''+data[0].lastName);
    this.updateForm.get('firstName').setValue((data[0]).firstName);
    this.updateForm.get('lastName').setValue((data[0]).lastName);
    this.updateForm.get('email').setValue((data[0]).email);
    this.updateForm.get('phone').setValue((data[0]).phone);
    this.updateForm.get('address').setValue((data[0]).address);
    this.updateForm.get('medical_history').setValue((data[0]).medical_history);
    this.updateForm.get('password').setValue((data[0]).password);
    this.updateForm.get('confirmPassword').setValue((data[0]).confirmPassword);  
   });
 }
  

 onUpdate(){
  var fullName = this.updateForm.get('fullName').value.split('');
  delete this.updateForm.value['fullName'];
  this.updateForm.get('firstName').setValue(fullName[0]);
  this.updateForm.get('lastName').setValue(fullName[1]);
  console.log(this.updateForm.value);
  this.UpdateUserService.updateUser(this.updateForm.value,this.id).subscribe(response =>{
    console.log(response);
 });

}
 
}

