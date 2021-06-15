import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  constructor(private http:HttpClient) { }
  users : any=[];
  table1 : any={};
  image= null;
  getServerData(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  getFileData(): Observable<any>{
    return this.http.post(" https://api.cloudinary.com/v1_1/dmesgafph/image/upload",this.image);

  }
}
