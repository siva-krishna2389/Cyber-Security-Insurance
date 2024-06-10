import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ApiService} from '../shared/api.service'

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  policyDetails !: any;

  constructor(private api : ApiService) { }

  ngOnInit(): void {

    this.getPolicyDetails();
  }


  getPolicyDetails(){
    this.api.getData().subscribe(res=>{
      this.policyDetails = res;
    });
  }

}
