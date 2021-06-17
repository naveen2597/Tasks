
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
  //FAKE-DETAILS
  value :any=[];
  getData() {
    this.tuser.getServerData().subscribe(response => {
      this.value = response;
      console.log(response);
    });
  }



//SCHEMA-JSON
 
data :any=[];
  cardheader:any;
  cardfield :any=[];
  
  listlinesfield:any=[];
 schema(){
   this.tuser.getServerData().subscribe(response =>{
     this.data = response.columns;           //COLUMNS
  
     this.cardheader= response.cardView.header;       //CARD-HEADER
     this.cardfield=response.cardView.fields;         //CARD-FIELD
    
     this.listlinesfield = response.listView.lines[0].fields;   //LIST-LINES
    //  console.log(this.cardheader);
    //  console.log(this.cardfield);
     console.log(this.listlinesfield);
     
     console.log(response); 
   })
 }


//DATA-JSON
 get : any =[];
 datajs(){
   this.tuser.getdatajson().subscribe(res =>{
     this.get = res;
     console.log(res);
     
   })
 }
 ngOnInit(): void {
  this.schema();
  this.datajs();
}

}
