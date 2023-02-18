import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  register(num:any,uname:any,pswd:any){



    const data={
      num,
      pswd,
      uname
    }

    return this.http.post('http://localhost:3002/register',data)
}

login(num:any,pswd:any){


  const data={
    num,
    pswd
  
  }

  return this.http.post('http://localhost:3002/login',data)
}
}
