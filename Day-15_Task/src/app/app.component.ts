import { Component,NgZone } from '@angular/core';
import {UserService} from 'src/app/user.service';
import { HttpClient, } from '@angular/common/http';

import { Cloudinary } from '@cloudinary/angular-5.x';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private hasBaseDropZoneOver: boolean = false;
  public uploader: any;
  private title: any;
  constructor(private tuser:UserService,private http:HttpClient,private cloudinary:Cloudinary, private zone: NgZone){}

  
  // title = 'service-form';
  SelectedFile:any;
onfileselected(event:any){
  this.SelectedFile = event.target.files[0];
}
ngOnInit(): void {
  const uploaderOptions: FileUploaderOptions = {
    url: 'https://api.cloudinary.com/v1_1/dmesgafph/image/upload',
    autoUpload: true,
    isHTML5: true,
    removeAfterUpload: true,

headers: [
  {
    name: 'X-Requested-With',
    value: 'XMLHttpRequest'
  }
]
  };
this.uploader = new FileUploader(uploaderOptions);
this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
  form.append('upload_preset', 'gsxfjmyw');
  form.append('file', fileItem);

  fileItem.withCredentials = false;
  return { fileItem, form };
};
}
fileOverBase(e: any): void {
  this.hasBaseDropZoneOver = e;
}


//  cl = new Cloudinary({cloud_name: "dmesgafph", secure: true});
upload(){
  console.log(this.SelectedFile);
  
}
}