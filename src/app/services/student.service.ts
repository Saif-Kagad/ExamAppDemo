import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';


@Injectable()
export class StudentService{

    constructor(private getHttp:HttpClient,private putHttp:HttpClient,private httpClient:HttpClient){

    }

    public addStudentusingApi(student:Student)
    {
        return this.getHttp.post("http://localhost:52104/api/Login/createcontact",student);
    }

    public LoginCheckUsingApi(student:Student)
    {
        return this.httpClient.post("http://localhost:52104/api/Login",student);
    }
}