import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  userDetails:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"adarsh",acno:1001,password:"abc123",balance:0},
    1002:{username:"akhil",acno:1002,password:"abc123",balance:0},
    1003:{username:"ddz",acno:1003,password:"abc123",balance:0},
  }
  constructor(private router:Router) { }

  ngOnInit():void{

  }
  
  login(){
    // alert('Login Worked')
    var acnum=this.acno
    var psw=this.pass
    var userDetails=this.userDetails
    //to avoid this.
    if(acnum in userDetails){
      if(psw==userDetails[acnum]["password"]){
          //acnum not in quotes because its not variable
        alert("login sucess")
        //redirection to other page
     this.router.navigateByUrl("dashboard")
      }
    
    else{
      alert("incorrect password")
    }
  }
  else{
    alert("incorrect ac no")
  }
}
}
