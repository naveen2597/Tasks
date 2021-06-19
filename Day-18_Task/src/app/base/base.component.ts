import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private router:Router,private tuser :UserService ) { }

  ngOnInit(): void {
    this.json1();
  }
 login(){
     this.router.navigateByUrl("login");
 }
 register(){
   this.router.navigateByUrl("register");
 }
 table(){
   this.router.navigateByUrl("Login-page")
 }

json:any=[];
 menugroup:any=[];
//  detail:any=[];
json1(){
  this.json = this.tuser.value;
  this.menugroup = this.json.menuGroup;
  //  this.detail = this.json.title;
}

}
