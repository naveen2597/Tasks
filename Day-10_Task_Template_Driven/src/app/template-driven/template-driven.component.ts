import { Component, OnInit } from '@angular/core';
import {Storage} from './../storage';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  user= new Storage('','','','')

  ngOnInit(): void {
  }
 onSubmit(naveen:any){
console.log(naveen);

 }
}
