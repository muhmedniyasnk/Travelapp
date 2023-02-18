import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.css']
})
export class AllPlacesComponent implements OnInit {

  allplaces:any=[];
  bookedplace:any=[];
  places:any;
  place:any;
  status:any;
  constructor(private api:ApiService,private fb:FormBuilder,private router:Router) { }

  getform = this.fb.group({
    name: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    phone: ['', [Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    pincode: ['', [Validators.required,Validators.pattern('[0-9]*')]],
    date: ['', [Validators.required]],
    buyerplace: ['', [Validators.required]]




  })

 searchTerm:string='';

  ngOnInit(): void {
    this.api.getallplaces().subscribe(
      (data:any)=>{
        
        this.allplaces = data.place

      }
    )

    this.api.searchkey.subscribe(
      (data:any)=>(
        this.searchTerm = data
      )
    )
  }

  addtowishlist(place:any){
    console.log(place);
    
    this.api.addtowishlist(place).subscribe(
      (result:any)=>{
        alert(result.message)
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

logout(){
  localStorage.removeItem('currentuser')
  this.router.navigateByUrl('')
}

}