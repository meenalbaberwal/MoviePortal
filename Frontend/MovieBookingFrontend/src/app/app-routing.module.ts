import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { AuthGuardGuard } from './auth-guard.guard';
// import {LoginComponent} from './app/login.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path : "registration", component : RegistrationComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"admin-homepage",component:AdminHomepageComponent,canActivate:[AuthGuardGuard]},
  {path:"user-homepage",component:UserHomepageComponent,canActivate:[AuthGuardGuard]},
  {path:"addmovie",component:AddmovieComponent,canActivate:[AuthGuardGuard]},
  {path:"updatemovie",component:UpdatemovieComponent,canActivate:[AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
