import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuestionBank';
  constructor(private router:Router){

  }
  addNew(){
    this.router.navigate(['/subject/add']);
  }
}

