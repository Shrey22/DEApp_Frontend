import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private loginurl = "http://localhost:52253/api/Login";

  private sprofile = "http://localhost:52253/api/Student/";

  private fileupld = "http://localhost:52253/api/UploadAPI";

  private listofstudents = "http://localhost:52253/api/onlystudents";

  private addstudent = "http://localhost:52253/api/addnew";

  private getstudbyid = "http://localhost:52253/api/Student/";

  private updtstudbyid = "http://localhost:52253/api/updaterecord/";

  private sortbyclass = "http://localhost:52253/api/Studentclass/";

  private sortbyname = "http://localhost:52253/api/byname";

  constructor(public http:HttpClient) { }

  Loginuser(obj)
  {
   return this.http.post(this.loginurl,obj);
  }

  Loggeduser(userid:any)
  {
    return this.http.get(this.sprofile + userid);
  }

  Fileupload(file:any)
  {
    return this.http.post(this.fileupld,file);
  }

  Allstudentlist()
  {
    return this.http.get(this.listofstudents);
  }

  InsertStudRecord(data:any)
  {
    return this.http.post(this.addstudent,data);
  }

  Getstudbyid(id)
  {
   return this.http.get(this.getstudbyid+id);
  }

  Updatestudbyid(id,studForm)
  {
    return this.http.put(this.updtstudbyid+id,studForm);
  }

  Sortlistbyclass(no)
  {
    return this.http.get(this.sortbyclass+no);
  }
  
  Sortstudbyname(nm:string)
  {
    return this.http.post(this.sortbyname,nm);
  }
}
