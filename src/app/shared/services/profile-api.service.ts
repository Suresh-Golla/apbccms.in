import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  url="http://localhost:3000/profile/";


  constructor(private http:HttpClient) { }


  postProfile(data:any){
    return this.http.post<any>(this.url, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getProfile(){
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProfile(id:number){
    return this.http.delete<any>(this.url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  // to edit particular candidate details in the database

 //   getCurrentData(id:any){    
 //     return this.http.get(`${this.url}/{id}`)          
 // }


  getCurrentProfile(id:number){
    return this.http.get(this.url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


   // to edit the particular candidate details in the database    

  updateCurrentProfile(id:number, data:any){
    return this.http.put(this.url+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


}
