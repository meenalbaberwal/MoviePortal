import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './Services/security.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private service:SecurityService,private router:Router) {}
  canActivate():boolean {
   const jwtToken=localStorage.getItem('jwtToken');
   const username=this.service.getUser();
    if(jwtToken==null||jwtToken==""||username==null||username=="") {
      
      // alert("Please Login to proceed!");
      Swal.fire({
        icon:'error',
        title:'Error occured! You are not Logged in!',
        text:'Please Login to proceed!'
      })
      this.router.navigate(['/','homepage']);
      return false;
    }
    else {
      console.log("hey");
      return true; 
    }
    
  }
  
}
