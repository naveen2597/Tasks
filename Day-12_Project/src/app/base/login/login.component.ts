import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Storage} from '../../storage';
import {UserService} from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= new Storage('','')
  constructor(private luser:UserService,private router:Router) { }
  userFirst:any;
  userPassword:any;
 

  
  onSubmit(naveen:any){
    console.log(naveen.value);
    this.userFirst=false;
     this.userPassword=false;
    
    for(var i=0; i<this.luser.users.length ;i++){
      if(this.user.firstname == this.luser.users[i].uname){
       this.userFirst=true;
       if(this.user.password == this.luser.users[i].password){
         this.userPassword=true;
         this.luser.table1=this.luser.users[i];
         console.log(this.luser.table1);
         
         
       }
      }
      
    }
    if(this.userFirst && this.userPassword) 
    {
    alert("Login successfully")
  this.router.navigateByUrl('Login-page')}
    else if(this.userFirst && !this.userPassword) alert("password error")
    else alert("user name is not found")
    
    
     }
     ngOnInit(): void {
    }
}
