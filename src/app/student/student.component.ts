import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidateModel } from '../models/candidatemodel';
import { CandidateApiService } from '../shared/services/candidate-api.service';
import { StudentApiService } from '../shared/services/student-api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  formValue !: FormGroup;
  candidateModelObj : CandidateModel = new CandidateModel();
 
  constructor(private api:StudentApiService, private fb:FormBuilder) { }


  ngOnInit(): void {
    this.formValue = this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      cpassword:[''],
      mobile:['']
    })
  }



  postStudentDetails(){
    this.candidateModelObj.firstName = this.formValue.value.firstName;
    this.candidateModelObj.lastName = this.formValue.value.lastName;
    this.candidateModelObj.email = this.formValue.value.email;
    this.candidateModelObj.password = this.formValue.value.password;
    this.candidateModelObj.cpassword = this.formValue.value.cpassword;
    this.candidateModelObj.mobile = this.formValue.value.mobile;

    this.api.postStudent(this.candidateModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Student details added successfully.");
      // this.formValue.reset();
    },
    err=>{
      alert("Some thing went wrong !");
    });
  }




 

}
