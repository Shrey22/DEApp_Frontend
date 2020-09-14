import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{

  constructor(public router:Router) { }

  Userdata:any

  isLoggedIn()
  {
    return (sessionStorage.getItem("isLoggedIn") == "1");
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.isLoggedIn)
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }

  isAdmin()
  {
    return (sessionStorage.getItem("RoleId")=="1");
  }

  Login(data:any)
  {
    //
    sessionStorage.setItem("isLoggedIn","1");
    sessionStorage.setItem("Email",data.Data.Email);
    sessionStorage.setItem("UserId", data.Data.User_id);
    sessionStorage.setItem("RoleId", data.Data.Role_id);
    sessionStorage.setItem("userData", JSON.stringify(data));
    this.Userdata = data;
   if(data.Data.Role_id == 1)
        this.router.navigate(['/admin/dashboard']);
    else
        this.router.navigate(['/stud/dashboard']);
    return;
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
}

