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
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';


var myRoutes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},

]


@NgModule({
  declarations: [
    AppComponent,RegisterComponent, HomeComponent, AboutusComponent,LoginComponent, AdminDashboardComponent, AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent,RegisterComponent]
})
export class AppModule { }
