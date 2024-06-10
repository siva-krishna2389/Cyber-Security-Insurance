import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-retrivequote',
  templateUrl: './retrivequote.component.html',
  styleUrls: ['./retrivequote.component.css']
})
export class RetrivequoteComponent implements OnInit {

  formValue !: FormGroup;
  constructor(private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      refId : ['',Validators.required],
      mobileNumber :['',Validators.required]
    })
  }

}
