import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../models/signup';
import { FederationApiService } from '../shared/services/federation-api.service';

@Component({
  selector: 'app-federationupdate',
  templateUrl: './federationupdate.component.html',
  styleUrls: ['./federationupdate.component.css']
})
export class FederationupdateComponent implements OnInit {

  formValue!:FormGroup;
  data !: any;
  modelObj: Signup = new Signup()
  courses = ['Java', 'Python', 'MEAN', 'MERN'];
  submitted = false;

  constructor(private fb:FormBuilder, private api:FederationApiService) { }

  ngOnInit(): void {
   
    this.formValue = this.fb.group({
      fname:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      lname:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email:['', [Validators.required, Validators.email]],
      pwd:['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      gender:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      course:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      mobile:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      // language:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      remember:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      language:this.fb.group({
        telugu:[''],
        english:[''],
        hindi:['']
      })
      
    });

    // this.formValue = this.fb.group({
    //   fname:[''],
    //   lname:[''],
    //   email:[''],
    //   pwd:[''],
    //   gender:[''],
    //   course:[''],
    //   mobile:[''],
    //   // language:[''],
    //   remember:[''],
    //   language:this.fb.group({
    //     telugu:[''],
    //     english:[''],
    //     hindi:['']
    //   })
      
    // });

    this.getAllCandidates();
   
  }

postUser(){
  this.submitted = true;
  if (this.formValue.valid) {    
  this.modelObj.fname = this.formValue.value.fname;
  this.modelObj.lname = this.formValue.value.lname;
  this.modelObj.email = this.formValue.value.email;
  this.modelObj.pwd = this.formValue.value.pwd;
  this.modelObj.mobile = this.formValue.value.mobile;
  this.modelObj.gender = this.formValue.value.gender;
  this.modelObj.course = this.formValue.value.course;
  this.modelObj.language = this.formValue.value.language;
  this.modelObj.remember = this.formValue.value.remember;
  this.modelObj.telugu = this.formValue.value.telugu;
  this.modelObj.english = this.formValue.value.english;
  this.modelObj.hindi = this.formValue.value.hindi;
 
  
  this.api.postDetails(this.modelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Candidate details added successfully.");
    this.formValue.reset();
    // this.route.navigate(['/profile']);  
    this.getAllCandidates();    
  },
  err=>{
    alert("Some thing went wrong !");
  });  


  }}

getAllData(){
  return this.api.getCandidate()
  .subscribe(res=>{
    this.data = res;
  })
}

getAllCandidates(){
  this.api.getCandidate()
  .subscribe(res=>{
    this.data = res;
  })
}


}