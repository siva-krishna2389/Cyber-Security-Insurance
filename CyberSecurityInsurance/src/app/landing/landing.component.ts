import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { landingModel } from './landing.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  formValue !: FormGroup;
  landingModelObj : landingModel = new landingModel();
  constructor(private formbuilder:FormBuilder,
    private api : ApiService , private http : HttpClient , private router : Router) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      zipCode : ['',Validators.required],
      fullName : ['',Validators.required],
      mobileNumber :['',Validators.required]
    })
  }

  landingDetails(){
    this.http.post<any>("http://localhost:3000/posts",this.formValue.value)
    .subscribe(res=>{
      alert("Proceed To Get Quote");
      this.router.navigate(['details']);
    },err=>{
      alert("Something Went Wrong");
    })
  }


}
