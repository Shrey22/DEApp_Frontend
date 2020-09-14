import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sprofile',
  templateUrl: './sprofile.component.html',
  styleUrls: ['./sprofile.component.css']
})
export class SProfileComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])});

  constructor(public service:DataService,public router:Router) { }
 
  msg:any;
  myprofile:any = {};
  Userid:any;

  ngOnInit() {
    
    this.Userid = sessionStorage.getItem("UserId");
    console.log(this.Userid);

    this.service.Loggeduser(this.Userid)
    .subscribe((result:any)=>{
     
      this.myprofile = result.Data;
      console.log(this.myprofile);
     
    });
  }

        
  get f(){
    return this.myForm.controls;
  }
     
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }
     
  submit(){
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource').value);
   
    this.service.http.post('http://localhost:52253/api/UploadAPI', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
        this.router.navigate(['/stud/sprofile']);
      })
  }
}



