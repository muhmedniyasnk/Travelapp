import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  num='';
  pswd='';
  registrationForm: any;

 

  //login model
  loginForm = this.fb.group({
    num:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-B0-9]*')]]
  })
  

  

  //database
 

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    // alert('Login Clicked')
  
  
    var num=this.loginForm.value.num;
    var pswd=this.loginForm.value.pswd;
    // var userDetails=this.ds.userDetails;
    if(this.loginForm.valid){
    this.ds.login(num,pswd)
    .subscribe((result:any)=>{
      alert(result.message);
      this.router.navigateByUrl('allplace')
      localStorage.setItem('currentuser',JSON.stringify(result.user.uname))


    },
    result=>{
      alert(result.error.message)
    }
    )}
  }

}
