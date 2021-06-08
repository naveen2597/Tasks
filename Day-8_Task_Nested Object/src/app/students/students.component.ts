import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }
  users: any = [{
    "name": "naveen",
    "Age": 25,
    "Address": "pondicherry",
    "marks": [
      { "sem1": { "English": "190", "Maths": "170", "Tamil": "195" } },
      { "sem2": { "English": "195", "Maths": "185", "Tamil": "170" } },
      { "sem3": { "English": "180", "Maths": "165", "Tamil": "145" } },
      
    ]
  },
  { 
    "name": "suriya",
  "Age": 24,
  "Address": "kanchipuram",
  "marks": [
    { "sem1": { "English": "190", "Maths": "170", "Tamil": "195" } },
    { "sem2": { "English": "195", "Maths": "185", "Tamil": "170" } },
    { "sem3": { "English": "180", "Maths": "165", "Tamil": "145" } },
    
  ]
},
  {
    "name": "kishore",
  "Age": 24,
  "Address": "chennai",
  "marks": [
    { "sem1": { "English": "190", "Maths": "170", "Tamil": "195" } },
    { "sem2": { "English": "195", "Maths": "185", "Tamil": "170" } },
    { "sem3": { "English": "180", "Maths": "1", "Tamil": "195" } },
    
  ]
  

  }]
  

  Search(value: any) {
    
    for (var i = 0; i < this.users.length; i++) {
      if (value == this.users[i].name || value == this.users[i].Age || value == this.users[i].Address) {
        // this.userFound = true;
        
        console.log(this.users[i]);
        break;
      }

    }
    // if (this.userFound) alert("okay")
    // else if (!this.userFound) alert("errorrrrrrr......")
  }
  // addItem(){

  // }
  onSubmit(value:any){


  }

  
  ngOnInit(): void {
    
  }

}
