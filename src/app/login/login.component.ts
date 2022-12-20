import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  url="http://localhost:3000/Cadidates/";
  constructor(private route:Router, private fb:FormBuilder, private http:HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }
login(){
 this.http.get<any>(this.url)
 .subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  });
  if (user) {
    alert('login successful');
    this.loginForm.reset();
    this.route.navigate(['/jobs']);
    }
    else{
      alert('user not found');
    }
 },
 err=>{
  alert('Something went wrong !')
 });
}

}
