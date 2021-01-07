import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamProjectApp';
  
  // logged:boolean=!!localStorage.getItem('button');
  
  constructor(){
    // localStorage.setItem('button','true');
  }
}
