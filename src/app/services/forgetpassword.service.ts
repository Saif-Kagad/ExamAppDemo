import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetPassword } from '../models/resetpassword.model';

@Injectable()
export class ForgetPassword{
    constructor(private hc:HttpClient){

    }
    public sendMail(id:number){
        //Change the link
        return this.hc.get("http://localhost:56838/api/ForgetPassword?id="+id);
    }

    public savePass(d:ResetPassword){
        //Change the link
        return this.hc.put("http://localhost:56838/api/ForgetPassword",d);
    }
}