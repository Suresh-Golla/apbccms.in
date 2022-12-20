import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateModel } from '../models/candidatemodel';
import { SignupApiService } from '../shared/services/signup-api.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyForm!:FormGroup;
  candidateModelObj : CandidateModel = new CandidateModel();

  constructor(private api:SignupApiService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      cpassword:[''],
      mobile:['']
    })
  }
  
  postCompanyDetails(){
    this.candidateModelObj.firstName = this.companyForm.value.firstName;
    this.candidateModelObj.lastName = this.companyForm.value.lastName;
    this.candidateModelObj.email = this.companyForm.value.email;
    this.candidateModelObj.password = this.companyForm.value.password;
    this.candidateModelObj.cpassword = this.companyForm.value.cpassword;
    this.candidateModelObj.mobile = this.companyForm.value.mobile;

    this.api.postDetails(this.candidateModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Candidate details added successfully.");
      this.companyForm.reset();  
      this.router.navigate(['/profile'])      
    },
    err=>{
      alert("Some thing went wrong !");
    });
  }



}
