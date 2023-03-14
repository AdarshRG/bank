import { Component } from '@angular/core';
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

  acno:any
  pass:any
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit():void{

  }
  
  login(){
    // alert('Login Worked')
    var acnum=this.acno
    var psw=this.pass
    const result =this.ds.login(acnum,psw)
    if(result){
      alert("login success")
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert("incorrect acno or password")
    }
}
}
