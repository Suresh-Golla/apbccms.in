import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateModel } from '../models/candidatemodel';
import { CandidateApiService } from '../shared/services/candidate-api.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  formValue !: FormGroup;
  candidateModelObj : CandidateModel = new CandidateModel();

  submitted = false;
  
  enteredValue = '';

  constructor(private fb:FormBuilder, private api:CandidateApiService, private route:Router) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      firstName:['', [Validators.required, Validators.minLength(5),  Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      lastName:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      cpassword:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      mobile:['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    })
  }


  postCandidateDetails(){
    this.submitted = true;
    if (this.formValue.valid) {
      this.candidateModelObj.firstName = this.formValue.value.firstName;     
      this.candidateModelObj.firstName = this.formValue.value.firstName;
      this.candidateModelObj.lastName = this.formValue.value.lastName;
      this.candidateModelObj.email = this.formValue.value.email;
      this.candidateModelObj.password = this.formValue.value.password;
      this.candidateModelObj.cpassword = this.formValue.value.cpassword;
      this.candidateModelObj.mobile = this.formValue.value.mobile;
  
     
      this.api.postCandidate(this.candidateModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Candidate details added successfully.");
        this.formValue.reset();
        this.route.navigate(['/profile']);      
      },
      err=>{
        alert("Some thing went wrong !");
      });
    }
   
  }


  OnlyNumbersAllowed(event:any):boolean{

    const charCode = (event.which)?event.which:event.keyCode;

    if(charCode > 31 && (charCode < 48 || charCode > 57)){
      console.log('charcode restricted is '+charCode);
      return false;
    }
    return true;
  }

  onlyNmeric():boolean{
    if (Number(this.enteredValue)) {
      console.log("It's a Numeric")
    } 
    else {
      console.log("Not a Numeric")
      this.enteredValue = "";
    }

    return false;
  }



  restrictNumber(event:any){
    if(event.target.value.length == 0  && event.key==="0"){
      event.preventDefault();
    }
    if(event.target.selectionStart == 0 && event.code==="space"){
      event.preventDefault();
    }
    console.log(event)
  }
  
}


