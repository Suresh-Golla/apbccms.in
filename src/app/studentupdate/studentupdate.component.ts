import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentApiService } from '../shared/services/student-api.service';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit {

  formValue!:FormGroup;
  constructor(private api:StudentApiService, private fb:FormBuilder, private router:ActivatedRoute, private route:Router) { }


  editCourse = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
    mobile: new FormControl(''),
  })

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.api.getCurrentStudent(this.router.snapshot.params['id'])
    .subscribe((result:any)=>{
      console.log(result)
      this.editCourse = new FormGroup({
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        email: new FormControl(result['email']),
        password: new FormControl(result['password']),
        cpassword: new FormControl(result['cpassword']),
        mobile: new FormControl(result['mobile']),
      })
    })
  }

  updateCuurentCourse(){
    // console.log(this.editJobs.value);
    this.api.updateCurrentStudent(this.router.snapshot.params['id'], this.editCourse.value)
    .subscribe((result:any)=>{
      // console.log(result);
      alert("Student details updated successfully.");
      this.route.navigate(['/training']);
    },
    err=>{
      alert("Some thing went wrong !");
    });
  }


  
}
