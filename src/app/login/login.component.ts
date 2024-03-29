import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  studentLogin:Student;
  student:any;
  msg:any;
  success:any;
  UserForm: any; 
  submitted=false;
  constructor(private studentService:StudentService,private router:Router) {
    this.studentLogin=new Student();
   }
   
   


  ngOnInit(): void {
    this.UserForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      
      password: new FormControl('',  [Validators.required]),
      
    });
  }

    get userFormControls() { return this.UserForm.controls; }
    onFormSubmit()    
   {    
     const student = this.UserForm.value;  
     console.log(student);  
     this.onLogin(student);
     this.submitted = true;
    //  if (this.UserForm.valid) {
    //   //alert('User login succesful!!!')
    this.UserForm.reset();
    // } 
   
 
     


  }


  Login()
    {
      this.router.navigate(["home"])
    }

  onLogin(studentLogin:Student)
  {
    this.studentService.LoginCheckUsingApi(studentLogin).
    subscribe(u=>{this.student = u;this.success="Login successful";
      //Setting Session value
      localStorage.setItem('Session','1') },
      err=>{this.msg=err.error.Message;this.student=undefined}
      );
     // alert('Login successful')
  }

}
