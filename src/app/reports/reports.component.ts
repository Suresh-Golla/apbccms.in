import { Component, OnInit } from '@angular/core';
import { ProfilModel } from '../models/profilemodel';
import { ProfileApiService } from '../shared/services/profile-api.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  profileData!:any;
  data!:any;


  constructor(private api:ProfileApiService) { }

  ngOnInit(): void {
    this.getAllProfiles();
  }

  getAllProfiles(){
    this.api.getProfile()
    .subscribe(res=>{
      this.profileData = res;
    });
  }

  onEdit(row:any){}

  deleteJob(row:any){
    this.api.deleteProfile(row.id)
    .subscribe(res=>{
      alert("Profile details deleted successfully");
      this.getAllProfiles();
    })
  }

 

  // getBook(id: string){
  //   console.log("Inside the updateBook()::::::Book id::::"+id);
  //   this.api.getProfileById(id)
  //       .subscribe((res) => {
  //         this.books = res;
  //        })      
  //       }
 
  
}
