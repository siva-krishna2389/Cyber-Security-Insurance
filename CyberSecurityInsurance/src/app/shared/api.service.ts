import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

    postData(data : any){
      return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
userData(data : any){
  return this.http.post<any>("http://localhost:3000/userDetails",data)
  .pipe(map((res : any)=>{
    return res;
  }))
}

    getData(){
      return this.http.get<any>("http://localhost:3000/userDetails")
      .pipe(map((res:any)=>{
        return res;
      }))
    }
}
