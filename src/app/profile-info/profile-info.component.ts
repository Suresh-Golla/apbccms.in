import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilModel } from '../models/profilemodel';
import { ProfileApiService } from '../shared/services/profile-api.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  genderList = ['Male', 'Female', 'Other'];
  caste = ['BC-A', 'BC-B', 'BC-C', 'BC-D', 'OC-A', 'OC-B', 'OC-C', 'OC-D', 'SC', 'ST', 'Other']
  states = ['Andra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamilnadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Uttar Pradesh', 'West Bengal', 'UNION Territories', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadar and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Lakshadeep', 'Pondicherry'];
  districts = ['East Godavari', 'Ananthapur', 'west godavari', 'Kadapa', 'Kurnool', 'Chittoor', 'Ongole', 'Krishna', 'Guntur', 'Nellore', 'Visakapatnam', 'Srikakulam', 'Vizayanagaram'];
  constitutions = ['Tuni', 'Rajahmundy Urban', 'Rajahmundy Rural', 'Kakinada Urban', 'Kakinada Rural', 'Amalapuram', 'Pitapuram', 'Peddapuram', 'Samarlakota'];
  courses = ['Post Graduation', 'Graduation', 'Diploma/Intermediate', '10th/SSC']
  profileValue!:FormGroup;
  profileModelObj : ProfilModel = new ProfilModel();
  
  constructor(private fb:FormBuilder, private api:ProfileApiService, private route:Router) { }

  ngOnInit(): void {
    this.profileValue=this.fb.group({
    mobile:[''],
    biodata:[''],
    gender:[''],
    caste:[''],
    photo:[''],
    state:[''],
    district:[''],
    constituency:[''],
    resume:[''],
    education:[''],
    aadhar:[''],
    pincode:['']
     })
    } 

    postProfileDetails(){
      this.profileModelObj.mobile = this.profileValue.value.mobile;
      this.profileModelObj.biodata = this.profileValue.value.biodata;
      this.profileModelObj.gender = this.profileValue.value.gender;
      this.profileModelObj.caste = this.profileValue.value.caste;
      this.profileModelObj.photo = this.profileValue.value.photo;
      this.profileModelObj.state = this.profileValue.value.state;
      this.profileModelObj.district = this.profileValue.value.district;
      this.profileModelObj.constituency = this.profileValue.value.constituency;
      this.profileModelObj.resume = this.profileValue.value.resume;
      this.profileModelObj.education = this.profileValue.value.education;
      this.profileModelObj.aadhar = this.profileValue.value.aadhar;
      this.profileModelObj.pincode = this.profileValue.value.pincode;

      this.api.postProfile(this.profileModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Candidate profile details added successfully.");
      this.profileValue.reset();
      this.route.navigate(['/login']);      
    },
    err=>{
      alert("Some thing went wrong !");
    });
    }

}
