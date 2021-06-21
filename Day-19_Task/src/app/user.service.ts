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
  value :any=[];
  getServerData(): Observable<any> {              //SCEMA-JSON
    return this.http.get("assets/schema.json");
  }
  getFileData(): Observable<any>{
    return this.http.post(" https://api.cloudinary.com/v1_1/dmesgafph/image/upload",this.image);

  }
  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }
  getdatajson(): Observable<any>{
    return this.http.get("assets/data.json");   //DATA-JSON
  }

  getappjson(): Observable<any>{
    return this.http.get("assets/app.json");
  }
}
