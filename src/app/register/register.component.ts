import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   //email = "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/";
    data = false;    
    UserForm: any;    
    message:string="";    
    student:Student;
    submitted=false;
    constructor(private formbulider: FormBuilder,private studentService:StudentService,private router:Router) {
this.student=new Student();
     }    
      
    ngOnInit() {    

      this.UserForm = new FormGroup({
        email: new FormControl('', [Validators.required,Validators.email]),
        fullname: new FormControl('', [Validators.required]),
        password: new FormControl('',  [Validators.required]),
        age: new FormControl('',  [Validators.required]), 
        gender: new FormControl('',  [Validators.required]),
        city: new FormControl('',  [Validators.required]),
        state: new FormControl('',  [Validators.required]),
        dob:new FormControl('',Validators.required),
        year:new FormControl('',Validators.required),
        qualification:new FormControl('',Validators.required)
      });
      
    }   
    
    get userFormControls() { return this.UserForm.controls; }
     onFormSubmit()    
    {    
      const user = this.UserForm.value;  
      console.log(user);  
      this.InsertStudent(user);
      this.submitted = true;
    if (this.UserForm.valid) {
      alert('Form Submitted succesfully!!!')
      this.UserForm.reset();
    } 
  
    }    

  //   InsertCustomer()
  // {
  //   this.customerService.addCustomerUsingApi(this.customer).subscribe(data=>console.log(data));
  // }
   

    InsertStudent(student:Student)    
    {    
    this.studentService.addStudentusingApi(student).subscribe(   
      ()=>    
      { 
            
        this.data = true;    
        this.message = 'Data saved Successfully';   
        this.UserForm.reset();    
      });    
    } 
    
    onLogin()
    {
      this.router.navigate(["login"])
    }
  }    
  


