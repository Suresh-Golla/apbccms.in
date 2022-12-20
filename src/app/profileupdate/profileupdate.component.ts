import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileApiService } from '../shared/services/profile-api.service';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {

  // profileValue!:FormGroup;
  genderList = ['Male', 'Female', 'Other'];
  caste = ['BC-A', 'BC-B', 'BC-C', 'BC-D', 'OC-A', 'OC-B', 'OC-C', 'OC-D', 'SC', 'ST', 'Other']
  states = ['Andra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamilnadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Uttar Pradesh', 'West Bengal', 'UNION Territories', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadar and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Lakshadeep', 'Pondicherry'];
  districts = ['East Godavari', 'Ananthapur', 'west godavari', 'Kadapa', 'Kurnool', 'Chittoor', 'Ongole', 'Krishna', 'Guntur', 'Nellore', 'Visakapatnam', 'Srikakulam', 'Vizayanagaram'];
  constitutions = ['Tuni', 'Rajahmundy Urban', 'Rajahmundy Rural', 'Kakinada Urban', 'Kakinada Rural', 'Amalapuram', 'Pitapuram', 'Peddapuram', 'Samarlakota'];
  courses = ['Post Graduation', 'Graduation', 'Diploma/Intermediate', '10th/SSC']
 
  constructor(private api:ProfileApiService, private fb:FormBuilder, private router:ActivatedRoute, private route:Router) { }

  editProfile = new FormGroup({
    mobile: new FormControl(''),
    biodata: new FormControl(''),
    gender: new FormControl(''),
    caste: new FormControl(''),
    photo: new FormControl(''),
    state: new FormControl(''),
    district: new FormControl(''),
    constituency: new FormControl(''),
    resume: new FormControl(''),
    education: new FormControl(''),
    aadhar: new FormControl(''),
    pincode: new FormControl(''),
  })

  ngOnInit(): void {

    console.log(this.router.snapshot.params['id']);
    this.api.getCurrentProfile(this.router.snapshot.params['id'])
    .subscribe((result:any)=>{
      console.log(result)
      this.editProfile = new FormGroup({
        mobile: new FormControl(result['mobile']),
        biodata: new FormControl(result['biodata']),
        gender: new FormControl(result['gender']),
        caste: new FormControl(result['caste']),
        photo: new FormControl(result['']),
        state: new FormControl(result['state']),
        district: new FormControl(result['district']),
        constituency: new FormControl(result['constituency']),
        resume: new FormControl(result['']),
        education: new FormControl(result['education']),
        aadhar: new FormControl(result['aadhar']),
        pincode: new FormControl(result['pincode']),
      })
    })

  }

  updateCuurentProfile(){
    // console.log(this.editJobs.value);
    this.api.updateCurrentProfile(this.router.snapshot.params['id'], this.editProfile.value)
    .subscribe((result:any)=>{
      // console.log(result);
      alert("Student details updated successfully.");
      this.route.navigate(['/reports']);
    },
    err=>{
      alert("Some thing went wrong !");
    });
  }


}
