import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateModel } from '../models/candidatemodel';
import { CandidateApiService } from '../shared/services/candidate-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor(private api:CandidateApiService, private fb:FormBuilder, private router:ActivatedRoute, private route:Router) { }

  editJobs = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
    mobile: new FormControl(''),
  })


  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.api.getCurrentCandidate(this.router.snapshot.params['id'])
    .subscribe((result:any)=>{
      console.log(result)
      this.editJobs = new FormGroup({
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        email: new FormControl(result['email']),
        password: new FormControl(result['password']),
        cpassword: new FormControl(result['cpassword']),
        mobile: new FormControl(result['mobile']),
      })
    })
    
  }
  


  updateCuurentJob(){
    // console.log(this.editJobs.value);
    this.api.updateCurrentCandidate(this.router.snapshot.params['id'], this.editJobs.value)
    .subscribe((result:any)=>{
      // console.log(result);
      alert("Candidate details updated successfully.");
      this.route.navigate(['/jobs']);
      
    },
    err=>{
      alert("Some thing went wrong !");
    });
  }

  
  

}
