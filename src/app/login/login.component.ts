import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Your Perfect Banking Partner"
  data1="Enter your Account number"

  // acno:any
  // pass:any
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }
loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pass:['',[Validators.required,Validators.pattern('[a-zA-z0-9]+')]]
})
  // ngOnInit():void{

  
  login(){
    // alert('Login Worked')
    var acno=this.loginForm.value.acno
    var pass=this.loginForm.value.pass
    if(this.loginForm.valid){
    const result =this.ds.login(acno,pass)
    if(result){
      alert("login success")
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert("incorrect acno or password")
    }
}
else{
  alert("Invalid form")
}
}
}