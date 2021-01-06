import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice:AuthguardServiceService,private router:Router){}
  canActivate(): boolean {  
    console.log("In Guard---"+localStorage.getItem("Session"));
    if (!this.Authguardservice.gettoken()) {  
        // this.router.navigateByUrl("/login"); 
        this.router.navigate(["login"]) 
    }  
    return this.Authguardservice.gettoken();  
  }   
}
