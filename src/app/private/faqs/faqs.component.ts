import { Component, OnInit } from '@angular/core';
import { FetchFAQService } from './fetch-faq.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent implements OnInit {

 
  faqData: Object; //An Object whcih will receive array of question and answers

  constructor(public router:Router,private myService:FetchFAQService) { }

  ngOnInit() {

    this.router.navigate(['private/navbar/faqs']);

    this.myService.fetchFAQ().subscribe(response => {
      this.faqData = response;})
  }

}
