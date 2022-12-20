import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  url="http://localhost:3000/Students/";

  constructor(private http:HttpClient) { }


  postStudent(data:any){
    return this.http.post<any>(this.url, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getStudent(){
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
// to edit the particular candidate details in the database
  updateStudent(data:any, id:number){
    return this.http.put<any>(this.url+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  deleteStudent(id:number){
    return this.http.delete<any>(this.url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  
  // to edit particular candidate details in the database

  getCurrentStudent(id:number){
    return this.http.get(this.url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


   // to edit the particular candidate details in the database
    

  updateCurrentStudent(id:number, data:any){
    return this.http.put(this.url+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }



}
