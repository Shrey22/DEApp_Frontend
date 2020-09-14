import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataEntry';

  constructor(private AuthService:AuthService,private router:Router,public service:DataService)
  {

  }

  isLoggedIn()
  {
    if(this.AuthService.isLoggedIn())
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  Logout()
  {
    sessionStorage.setItem("isLoggedIn","0");
    delete sessionStorage["Email"];
    delete sessionStorage["UserId"];
    delete sessionStorage["userData"];
    delete sessionStorage["isLoggedIn"];
    delete sessionStorage["RoleId"];
    this.router.navigate(['/login']);
  }

  // Logout()
  // {
  //   sessionStorage.setItem("isLoggedIn", "0");
  //   delete sessionStorage["EmailId"];
  //   delete sessionStorage["UserId"];
  //   delete sessionStorage["userData"];
  //   delete sessionStorage["isLoggedIn"];
  //   delete sessionStorage["RoleId"];
  //   this.router.navigate(['/login']);

  // onInit():void{

  //   if(!this.AuthService.isLoggedIn())
  //   {
  //     this.router.navigate(['/login']);
  //   }

  // }
}

