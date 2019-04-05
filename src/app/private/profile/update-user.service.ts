import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private http:HttpClient) {}

  updateUser(data,id){
    return this.http.put('http://localhost:3000/RegisteredUsers/'+id,data);
  }
}
