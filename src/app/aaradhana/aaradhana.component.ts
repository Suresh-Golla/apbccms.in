import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateModel } from '../models/candidatemodel';
import { SignupApiService } from '../shared/services/signup-api.service';

@Component({
  selector: 'app-aaradhana',
  templateUrl: './aaradhana.component.html',
  styleUrls: ['./aaradhana.component.css']
})
export class AaradhanaComponent implements OnInit {

  aaradhanaForm!:FormGroup;
  candidateModelObj : CandidateModel = new CandidateModel();

  constructor(private api:SignupApiService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.aaradhanaForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      cpassword:[''],
      mobile:['']
    })
  }
  
  postAaradhanaDetails(){
    this.candidateModelObj.firstName = this.aaradhanaForm.value.firstName;
    this.candidateModelObj.lastName = this.aaradhanaForm.value.lastName;
    this.candidateModelObj.email = this.aaradhanaForm.value.email;
    this.candidateModelObj.password = this.aaradhanaForm.value.password;
    this.candidateModelObj.cpassword = this.aaradhanaForm.value.cpassword;
    this.candidateModelObj.mobile = this.aaradhanaForm.value.mobile;

    if (this.candidateModelObj.password === this.candidateModelObj.cpassword) {   
    this.api.postDetails(this.candidateModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Aaradhana member details added successfully.");
      this.aaradhanaForm.reset();  
      this.router.navigate(['/profile'])      
    },
    err=>{
      alert("Some thing went wrong !");
    });
  }
  else {
    alert('password and conform password does not match')
      }
  }

}
