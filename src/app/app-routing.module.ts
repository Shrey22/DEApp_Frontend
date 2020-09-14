import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdashboardComponent } from './Admin/adashboard/adashboard.component';
import { AddstudComponent } from './Admin/addstud/addstud.component';
import { AProfileComponent } from './Admin/aprofile/aprofile.component';
import { EditComponent } from './Admin/studlist/edit/edit.component';
import { StudlistComponent } from './Admin/studlist/studlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Stud/dashboard/dashboard.component';
import { SProfileComponent } from './Student/sprofile/sprofile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'stud/dashboard', component: DashboardComponent},
  { path: 'admin/dashboard', component: AdashboardComponent},
  { path: 'stud/sprofile', component: SProfileComponent},
  { path: 'admin/aprofile', component: AProfileComponent},
  { path: 'admin/studlist', component: StudlistComponent},
  { path: 'admin/addstud', component: AddstudComponent},
  { path: 'admin/studlist/edit/:User_id', component: EditComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[
  HomeComponent,
  LoginComponent,
  DashboardComponent,
  AdashboardComponent,
  SProfileComponent,
  AProfileComponent,
  StudlistComponent,
  AddstudComponent,
  EditComponent
] 