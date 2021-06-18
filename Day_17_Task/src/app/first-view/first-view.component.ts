import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {

  constructor(private tuser:UserService) { }

  ngOnInit(): void {
    this.app();
  }
  dataArray:any=[];
app(){
  this.tuser.getappjson().subscribe(response=>{
    this.dataArray = response;
    console.log(this.dataArray);
    
  })
}
}
