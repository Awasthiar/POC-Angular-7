import { Injectable } from '@angular/core';
import { Details } from 'src/app/shared/details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Service to fetch details of Registered Users

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private httpClient:HttpClient) { }

  getDetails(Details):Observable<Details>{
    return this.httpClient.get<Details>(('http://localhost:3000/RegisteredUsers'),{params:Details});
  }
}
