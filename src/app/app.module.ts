import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentService} from './services/student.service'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import * as CryptoJS from 'crypto-js';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetComponentComponent } from './reset-component/reset-component.component';
import { ForgetPassword } from './services/forgetpassword';
import { AuthguardServiceService } from './authguard-service.service';
import { AuthenticationGuard } from './authentication.guard';



var myRoutes:Routes=[
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:"home",component:HomeComponent,canActivate:[AuthenticationGuard]},
  {path:"aboutus",component:AboutusComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  // Paths - Forget Password and Reset Password
  {path:"ForgetPassword",component:ForgetPasswordComponent},
  {path:"ResetPassword",component:ResetComponentComponent}

]


@NgModule({
  declarations: [
    AppComponent,RegisterComponent, HomeComponent, AboutusComponent,LoginComponent, ForgetPasswordComponent, ResetComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [StudentService,ForgetPassword,AuthguardServiceService],
  bootstrap: [AppComponent,RegisterComponent]
})
export class AppModule { }