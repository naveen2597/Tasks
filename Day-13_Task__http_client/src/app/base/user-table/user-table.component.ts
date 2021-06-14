
import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
 
  constructor(private tuser:UserService,private back:Router,private location:Location) { }
 loc:any=this.tuser.table1;
 detail:any;
  ngOnInit(): void {
    // this.getData();
  }
  goBack() {
    this.back.navigateByUrl('login');
  }
  editInfo() {
    this.detail = this.loc;
  }
  updInfo() {
    this.location.back();
    alert("Successfully Updated...");
    console.log(this.detail.users);
  }
  value :any=[];
  getData() {
    this.tuser.getServerData().subscribe(response => {
      this.value = response;
      console.log(response);
    });
  }

 

}
