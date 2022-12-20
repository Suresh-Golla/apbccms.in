import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateModel } from '../models/candidatemodel';
import { SignupApiService } from '../shared/services/signup-api.service';

@Component({
  selector: 'app-federation',
  templateUrl: './federation.component.html',
  styleUrls: ['./federation.component.css']
})
export class FederationComponent implements OnInit {

  federationFrom!:FormGroup;
  candidateModelObj : CandidateModel = new CandidateModel();

  constructor(private api:SignupApiService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.federationFrom = this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      cpassword:[''],
      mobile:['']
    })
  }


  
  postInstituteDetails(){
    this.candidateModelObj.firstName = this.federationFrom.value.firstName;
    this.candidateModelObj.lastName = this.federationFrom.value.lastName;
    this.candidateModelObj.email = this.federationFrom.value.email;
    this.candidateModelObj.password = this.federationFrom.value.password;
    this.candidateModelObj.cpassword = this.federationFrom.value.cpassword;
    this.candidateModelObj.mobile = this.federationFrom.value.mobile;

    if (this.candidateModelObj.password === this.candidateModelObj.cpassword) {   
    this.api.postDetails(this.candidateModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Federation member details added successfully.");
      this.federationFrom.reset();  
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
