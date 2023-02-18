import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
wishlist:any=[];
bookedplace:any=[];
emsg:any;
emsg1:any;
  status:any;
  constructor(private api:ApiService,private fb:FormBuilder) { }

  getform = this.fb.group({
    name: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    phone: ['', [Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    pincode: ['', [Validators.required,Validators.pattern('[0-9]*')]],
    date: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9/]*')]],
    buyerplace: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]




  })

  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist = data.place
        if(this.wishlist.length==0){
          this.emsg="Empty wishlist"
          
        }
        else{
          this.emsg1="emty"
        }
      },
      (data:any)=>{
        this.emsg=data.error.message
      }
    )
  }
  deletewish(place:any){
    this.api.deletewish(place.id).subscribe(
      (result:any)=>{
        alert(result.message)
        window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

  paymentmethod(){
    this.status="payment successfull"
  }

  booking(places:any){
    this.bookedplace = places
  }

  bookplace(places: any) {
    let id =places.id
    let place=places.place
    let image = places.image
    let price=places.price
    let name=this.getform.value.name
    let pincode=this.getform.value.pincode
    let days=places.days
    let phone=this.getform.value.phone
    let buyerplace=this.getform.value.buyerplace
    let date=this.getform.value.date


    console.log(id,place,image,price,name,pincode,phone,days,buyerplace,date);
    
if(this.getform.valid){

  this.api.bookplace(id,place,image,price,name,pincode,days,phone,buyerplace,date).subscribe(
    (result:any)=>{
      alert(result.message)
      window.location.reload()
    },
    (result:any)=>{
      alert(result.error.message)
    }
    )
    
  } else{
    alert('required')
  }
}

}
