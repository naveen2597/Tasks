import { Component, OnInit } from '@angular/core';
import {Storage} from '../../storage';
import {UserService} from 'src/app/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= new Storage('','')
  constructor(private luser:UserService) { }
  userFirst:any;
  userPassword:any;
  ngOnInit(): void {
  }
  onSubmit(naveen:any){
    console.log(naveen.value);
    this.userFirst=false;
     this.userPassword=false;
    
    for(var i=0; i<this.luser.users.length ;i++){
      if(this.user.firstname == this.luser.users[i].uname){
       this.userFirst=true;
       if(this.user.password == this.luser.users[i].password){
         this.userPassword=true;
       }
      }
      
    }
    if(this.userFirst && this.userPassword) alert("Login successfully")
    else if(this.userFirst && !this.userPassword) alert("password error")
    else alert("user name is not found")
    
    
     }
}
