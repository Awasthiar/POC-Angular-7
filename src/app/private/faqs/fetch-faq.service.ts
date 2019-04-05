import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchFAQService {

  constructor(private http:HttpClient) { }

  fetchFAQ(){
    return this.http.get('http://localhost:3000/FAQ')
    }
}
