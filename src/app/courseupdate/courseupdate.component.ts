import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../models/signup';
import { FederationApiService } from '../shared/services/federation-api.service';

@Component({
  selector: 'app-courseupdate',
  templateUrl: './courseupdate.component.html',
  styleUrls: ['./courseupdate.component.css']
})
export class CourseupdateComponent implements OnInit {

  submitted = false;
  courseForm!:FormGroup;
  modelObj: Signup = new Signup();

  constructor(private fb:FormBuilder, private api:FederationApiService) { }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
          fname:['',Validators.required],
          lname:['', Validators.required]
    });
  }


  postUser(){
    this.submitted = true;
    if (this.courseForm.valid) {    
    this.modelObj.fname = this.courseForm.value.fname;
    this.modelObj.lname = this.courseForm.value.lname;
   
    
    this.api.postDetails(this.modelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Candidate details added successfully.");
      this.courseForm.reset();
  
    },
    err=>{
      alert("Some thing went wrong !");
    });  
  
  
    }}
  

}
