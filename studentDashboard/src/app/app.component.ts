import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { empty } from 'rxjs';
import { StudentService } from './student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentDashboard';

 
constructor(private studentService: StudentService){
  this.getStudentsDetails();
 }

 studentDetails = null;

 studentToUpdate = {
  rollNumber:"",
  name : "",
  address : "",
  percentage :"",
};
 
  register(registerForm: NgForm){
this.studentService.registerStudent(registerForm.value).subscribe(
(resp)=>{
  console.log(resp);
  registerForm.reset();
  this.getStudentsDetails();
},
(err)=>{
console.log(err);
}
);
  }

  getStudentsDetails(){
    this.studentService.getStudents().subscribe(
      (resp)=>{
        console.log(resp);
       this.studentDetails = resp;
      },
      (err)=>{
      console.log(err);
      }
    )
  }

  deleteStudent(student){
    this.studentService.deleteStudent(student.rollNumber).subscribe(
      (resp)=>{
        // this.studentDetails = resp;
        this.getStudentsDetails();
        
       
      },
      (err) =>{
        alert(err.message);
      }
  
    )
  }

  edit(student){
    this.studentToUpdate = student;
  }

  updateStudent(){
    this.studentService.updateStudent(this.studentToUpdate).subscribe(
      (resp) => {
        console.log (resp);
      },
      (err) => {
      console.log(err);
    }
    )
    };
  }

