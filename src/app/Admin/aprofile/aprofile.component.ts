import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-aprofile',
  templateUrl: './aprofile.component.html',
  styleUrls: ['./aprofile.component.css']
})
export class AProfileComponent implements OnInit {

  msg:any;
  myprofile:any = {};
  Userid:any;

  constructor(public service:DataService,public router:Router) { }

  ngOnInit() {
    this.Userid = sessionStorage.getItem("UserId");
    console.log(this.Userid);

    this.service.Loggeduser(this.Userid)
    .subscribe((result:any)=>{
     
      this.myprofile = result.Data;
      console.log(this.myprofile);
     
    });
  }

}
