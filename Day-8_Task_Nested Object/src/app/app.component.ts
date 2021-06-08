import { Component } from '@angular/core';


interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  name = 'Angular';
    
  students: Student[] = [
    {
      id: 1,
      name: "Hardik",
      email: "hardik@gmail.com",
      gender: "male"
    },
    {
      id: 2,
      name: "Paresh",
      email: "Paresh@gmail.com",
      gender: "male"
    },
    {
      id: 3,
      name: "Kiran",
      email: "kiran@gmail.com",
      gender: "female"
    },
    {
      id: 4,
      name: "Mahesh",
      email: "mahesh@gmail.com",
      gender: "male"
    },
    {
      id: 5,
      name: "Karan",
      email: "karan@gmail.com",
      gender: "male"
    },
  ]
}
  

