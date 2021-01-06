import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }
  gettoken(){  
    console.log("In Service---"+localStorage.getItem("Session"));
    return !!localStorage.getItem("Session");  
  } 
}
