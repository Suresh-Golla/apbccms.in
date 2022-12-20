import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateModel } from '../models/candidatemodel';
import { SignupApiService } from '../shared/services/signup-api.service';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit {

  instituteForm!:FormGroup;

  candidateModelObj : CandidateModel = new CandidateModel();

  constructor(private api:SignupApiService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.instituteForm= this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      cpassword:[''],
      mobile:['']
    })
  }


  
  postInstituteDetails(){
    this.candidateModelObj.firstName = this.instituteForm.value.firstName;
    this.candidateModelObj.lastName = this.instituteForm.value.lastName;
    this.candidateModelObj.email = this.instituteForm.value.email;
    this.candidateModelObj.password = this.instituteForm.value.password;
    this.candidateModelObj.cpassword = this.instituteForm.value.cpassword;
    this.candidateModelObj.mobile = this.instituteForm.value.mobile;

    this.api.postDetails(this.candidateModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Institute course details added successfully.");
      this.instituteForm.reset();  
      this.router.navigate(['/profile'])      
    },
    err=>{
      alert("Some thing went wrong !");
    });
  }


 
}
