import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent implements OnInit {

  msg:any;

  constructor(public service:DataService,public router:Router) { }

  ngOnInit() {
  
  }

  Addstud(studForm:any)
  {
  
    console.log(studForm);
    this.service.InsertStudRecord(studForm)
    .subscribe((result:any)=>{
    
       if(result.Status == "Record successfully added...")
       {
         
         alert("Record Added.")
 
         this.router.navigate(['/admin/studlist']);
         

       }
      
    })
  }
}


