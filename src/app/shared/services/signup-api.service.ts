import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupApiService {

  url = "http://localhost:3000/Signup/";
  constructor(private http:HttpClient) { }
// submit form data to database
  postDetails(data:any){
    return this.http.post<any>(this.url, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
// to display all the data from the database
  getDetails(){
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

 
   // to delete the particular candidate details in the database

  deleteDetails(id:number){
    return this.http.delete<any>(this.url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }



  // to edit particular candidate details in the database

  getCurrentDetails(id:number){
    return this.http.get(this.url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  // getCurrentCandidate(id:number){
  //   return this.http.get(`${this.url}/${id}`);
  // }

   // to edit the particular candidate details in the database
   
  updateCurrentDetails(id:number, data:any){
    return this.http.put(this.url+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

   // updateCurrentCandidate(id:number, data:any){
  //   return this.http.put(`${this.url}/${id}`, data);
  // }
}
