import { Component } from '@angular/core';
import {UserService} from 'src/app/user.service';
import { HttpClient, } from '@angular/common/http';
import {Cloudinary} from 'cloudinary-core';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private tuser:UserService,private http:HttpClient,private cloudinary:Cloudinary){}
  title = 'service-form';
//   SelectedFile:any;
// onfileselected(event:any){
//   this.SelectedFile = event.target.files[0];
// }
//  cl = new Cloudinary({cloud_name: "dmesgafph", secure: true});
// upload(){
//   console.log(this.SelectedFile);
  
// }
}