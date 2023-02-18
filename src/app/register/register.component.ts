import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  num="";
  pswd="";
  uname="";


  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

  
  //registration model
  registrationForm = this.fb.group({
    num:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  ngOnInit(): void {
  }

  register(){
    // console.log(this.registrationForm);
    
  
    
    var uname=this.registrationForm.value.uname;
    var num=this.registrationForm.value.num;
    var pswd=this.registrationForm.value.pswd;
    if(this.registrationForm.valid){

       
      // console.log(this.registrationForm.get('uname')?.errors);
      this.ds.register(num,uname,pswd)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)
      }
      )

      
    }
   

 
  }

}
