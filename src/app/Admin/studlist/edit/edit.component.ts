import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  uid:any;
  datafrmsrvr:any;

  constructor(public service:DataService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {

    this.route.params.subscribe((params=>{
      this.uid = params.User_id;

      this.service.Getstudbyid(this.uid)
      .subscribe((result:any)=>{
        if(result.Status == "Record Found.")
        {
          this.datafrmsrvr = result.Data;
          console.log(this.datafrmsrvr)
        }
      
      })
    }))
  }

  Updatestud(studForm:any)
  {
    //
     this.service.Updatestudbyid(this.uid,studForm)
     .subscribe((result:any)=>{
       if(result.Status == "Record successfully updated.")
       {
         alert("Record successfully updated")
         this.router.navigate(['/admin/studlist']);
       }
       else
       {
        alert("Failed to update Record")
       }
     })
  }

}
