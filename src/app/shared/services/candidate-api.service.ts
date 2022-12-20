import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateApiService {

  url = "http://localhost:3000/Cadidates/";
  constructor(private http:HttpClient) { }
// submit form data to database
  postCandidate(data:any){
    return this.http.post<any>(this.url, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
// to display all the data from the database
  getCandidate(){
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

 
   // to delete the particular candidate details in the database

  deleteCandidate(id:number){
    return this.http.delete<any>(this.url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }



  // to edit particular candidate details in the database

  getCurrentCandidate(id:number){
    return this.http.get(this.url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  // getCurrentCandidate(id:number){
  //   return this.http.get(`${this.url}/${id}`);
  // }

   // to edit the particular candidate details in the database
   
  updateCurrentCandidate(id:number, data:any){
    return this.http.put(this.url+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

   // updateCurrentCandidate(id:number, data:any){
  //   return this.http.put(`${this.url}/${id}`, data);
  // }

}
