import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http:HttpClient) { }

  getdata():Observable<any>{
    return this.http.get('http://localhost:3000/posts');
  }
  savedata(formdata):Observable<any>{
    return this.http.post('http://localhost:3000/posts',formdata);
  }
  savelogin(formdata):Observable<any>{
    return this.http.post('http://localhost:3000/login',formdata);
  }
}
