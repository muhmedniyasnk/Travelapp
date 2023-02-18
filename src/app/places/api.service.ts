import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getallplaces(){
    return this.http.get('http://localhost:3002/all-places')
  }

  searchkey=new BehaviorSubject('')

  addtowishlist(place:any){
    const body={
      id:place.id,
      place:place.place,
      price:place.price,
      days:place.days,
      image:place.image
    }
    return this.http.post('http://localhost:3002/addtowishlist',body)
  }

  getwishlist(){
    return this.http.get('http://localhost:3002/getwishlist')
  }

  deletewish(id:any){
    return this.http.delete('http://localhost:3002/deletewish/'+id)
  }

  bookplace(id:any,place:any, image:any,price:any,name:any,pincode:any,days:any,phone:any,buyerplace:any,date:any){
    const data={
     id:id,
     place:place,
     image:image, 
     price:price,
     name:name,
     pincode:pincode,
     days:days,
     phone:phone,
     buyerplace:buyerplace,
     date:date
   
     }
     return this.http.post('http://localhost:3002/bookplace',data)
   
   }

   getorder(){
    return this.http.get("http://localhost:3002/getorder")
  }

  cancelorder(id:any){
    return this.http.delete('http://localhost:3002/cancelorder/'+id)
  }
}
