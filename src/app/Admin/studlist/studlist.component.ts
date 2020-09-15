import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.css']
})
export class StudlistComponent implements OnInit {

  studlist:any;
  classnum;
  sortedlist:any;
  sortedlistbyname:any

  constructor(public service:DataService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {

   if(this.studlist == null)
   {
    this.service.Allstudentlist()
    .subscribe((result:any)=>{
      if(result.Status == "Records Found.")
      {
        this.studlist = result.Data;
      }
    });
   }
   else if(this.sortedlistbyname == null)
   {
    this.studlist = this.sortedlist;
   }   
   else
   {
    this.studlist = this.sortedlistbyname;
   }
  }


  SortbyClass(no)
  {
     //
      this.service.Sortlistbyclass(no)
      .subscribe((result:any)=>{
        if(result.Status == "Record Found.")
        {
          //
          this.sortedlist = result.Data;
          console.log(this.sortedlist);

          this.ngOnInit();
        }
      })
 }
 
  sortbyname(name:string)
 {
   //
   //alert(name);
   console.log(name);

   this.service.Sortstudbyname(name)
   .subscribe((result:any)=>{
     //

     console.log(result.Status)
     if(result.Status == "Records Found.")
     {
         this.sortedlistbyname = result.Data;
        // alert("Records Found.")
        this.ngOnInit();
      
     }
     else
     {
      alert("No Matching Records Found!")
     }
   })
 }



}


