import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string
  loginUserData={}

  constructor(public service:DataService,public auth_service:AuthService,public router:Router) { }

  ngOnInit() {
  }

  Validation(credentials:any)
  {
    //
    console.log(credentials.Email);
    console.log(credentials.Password);

    if(credentials.Email == null || credentials.Password == null)
    {
      this.msg = "Email/Password required";
      console.log(this.msg);
    }

    else
    {
      this.Login(credentials);
    }
  }

  Login(credentials:{Email:any;Password:any;})
  {
    let isLoggedIn:any;

    let result = this.service.Loginuser(credentials)
    result.subscribe((result1:any)=>{
      console.log(result1);

      if(result1.Status == "success")
      {
        isLoggedIn = true;
      }
      else
      {
        this.msg =" Username / Password is invalid";  
        console.log(this.msg);
      }

      if(isLoggedIn)
      {
        this.auth_service.Login(result1);
        this.msg = "";
      }
      else
      {
        this.msg = "Username / Password invalid";
      }
    
    },(error)=>{
      this.msg = "Username / Password is Wrong!;"
    });
}
}
