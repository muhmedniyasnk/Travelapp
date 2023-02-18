import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allorders:any = [];
  nomsg: any;
  username:any;


  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.getorder();
  }

  getorder(){
    this.api.getorder().subscribe(
      (result:any) =>{
        this.allorders = result.orders
        if(this.allorders.length==0){
          this.nomsg="Empty orders"
        }
        this.username = JSON.parse(localStorage.getItem('currentuser')|| '')
      }
    )
    
  }

  cancelorder(order:any){
    this.api.cancelorder(order.id).subscribe(
      (result:any)=>{
        // alert(result.message)
        window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

}
