import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {

  constructor(private tuser:UserService,private router:Router) { }

  
  dataArray:any=[];
   
app(){
  this.tuser.getappjson().subscribe(response=>{
    this.dataArray = response;
    
    console.log(this.dataArray);
    
  })
}
onSubmit(){
  this.router.navigateByUrl('cardview');
}
permission:any= [];
display(Data:any){
    this.permission = Data;
    this.tuser.value = this.permission;
    console.log(this.tuser.value);
    
}
ngOnInit(): void {
  this.app();
  
}
}
