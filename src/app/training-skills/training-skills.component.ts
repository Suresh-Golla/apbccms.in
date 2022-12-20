import { Component, OnInit } from '@angular/core';
import { StudentApiService } from '../shared/services/student-api.service';

@Component({
  selector: 'app-training-skills',
  templateUrl: './training-skills.component.html',
  styleUrls: ['./training-skills.component.css']
})
export class TrainingSkillsComponent implements OnInit {

  studentData !: any;

  constructor(private api:StudentApiService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.api.getStudent()
    .subscribe(res=>{
      this.studentData = res;
    })
  }

  deleteStudent(row:any){
    this.api.deleteStudent(row.id)
    .subscribe(res=>{
      alert("Student details deleted successfully.");
      this.getAllStudents();
    },
    err=>{
      alert("Something went wrong !")
    });
  }
}
