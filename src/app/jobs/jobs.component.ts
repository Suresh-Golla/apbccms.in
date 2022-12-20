import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CandidateModel } from '../models/candidatemodel';
import { CandidateApiService } from '../shared/services/candidate-api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  
  candidataData !: any;
  formValue !: FormGroup;
  candidateModelObj : CandidateModel = new CandidateModel();

  constructor(private api:CandidateApiService) { }

  ngOnInit(): void {
    this.getAllCandidates();
  }


  // to display all the data from the database
  getAllCandidates(){
    this.api.getCandidate()
    .subscribe(res=>{
      this.candidataData = res;
    })
  }

  // to delete the particular candidate details in the database
  deleteJob(row:any){
    this.api.deleteCandidate(row.id)
    .subscribe(res=>{
      alert("Cadidate details deleted successfully");
      this.getAllCandidates();
    })
  }

  // onEdit(row:any){  
  //   // this.candidateModelObj.id = row.id;
  //   // this.formValue.controls['firstName'].setValue(row.firstName);
  //   // this.formValue.controls['lastName'].setValue(row.lastName);
  //   // this.formValue.controls['email'].setValue(row.email);
  //   // this.formValue.controls['mobile'].setValue(row.mobile);
  //   // this.formValue.controls['salary'].setValue(row.salary);
  // }
   

 

}
