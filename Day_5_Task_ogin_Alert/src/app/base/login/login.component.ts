import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showText(em:string){
  if(em !="") alert("WELCOME"+" "+em)
  else alert("Please Fill the Form")
}
  constructor() { }

  ngOnInit(): void {
  }
} 

