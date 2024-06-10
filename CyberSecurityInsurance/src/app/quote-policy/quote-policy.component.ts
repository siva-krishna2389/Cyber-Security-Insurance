import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service'
@Component({
  selector: 'app-quote-policy',
  templateUrl: './quote-policy.component.html',
  styleUrls: ['./quote-policy.component.css']
})
export class QuotePolicyComponent implements OnInit {

quoteDetails !: any;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getQuoteDetails();
  }
  getQuoteDetails(){
  this.api.getData().subscribe(res=>{
    this.quoteDetails=res;
  })
}
}
