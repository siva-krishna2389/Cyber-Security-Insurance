import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { detailsModel } from './details.model';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  formValue !: FormGroup;
  userDetails !: any;
  detailsModelObj: detailsModel = new detailsModel();
  constructor(private formbuilder: FormBuilder,
    private api: ApiService) { }


  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      fullName: [''],
      mobileNumber: [''],
      address: [''],
      city: [''],
      state: [''],
      country: [''],
      zipCode: [''],
      termType: [''],
      effectiveDate: ['']
    }),
    this.getDetails();
  }

  getDetails() {
    this.api.getData().subscribe(res => {
      this.userDetails = res;
    })
  }

  postUserData() {
    this.detailsModelObj.fullName = this.formValue.value.fullName;
    this.detailsModelObj.mobileNumber = this.formValue.value.mobileNumber;
    this.detailsModelObj.address = this.formValue.value.address;
    this.detailsModelObj.city = this.formValue.value.city;
    this.detailsModelObj.state = this.formValue.value.state;
    this.detailsModelObj.country = this.formValue.value.country;
    this.detailsModelObj.zipCode = this.formValue.value.zipCode;
    this.detailsModelObj.termType = this.formValue.value.termType;
    this.detailsModelObj.effectiveDate = this.formValue.value.effectiveDate;

    this.api.userData(this.detailsModelObj)
      .subscribe((res: any) => {
        console.log(res);
      })
  }

}