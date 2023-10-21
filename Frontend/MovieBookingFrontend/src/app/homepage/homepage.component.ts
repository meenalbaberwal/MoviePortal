import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {SecurityService} from './../Services/security.service';
// import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { MatDialog, DialogPosition } from '@angular/material/dialog';
import { ForgetPassComponent } from '../forget-pass/forget-pass.component';
import { Token } from '@angular/compiler';
import * as jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2'



declare const window:Window;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})

export class HomepageComponent implements OnInit{

  private isAuthenticated:boolean=false;

  constructor(private router:Router,private services:SecurityService,
    private dialog:MatDialog) { }


  ngOnInit(): void {}
  
  sign_up_btn:any;
  sign_in_btn:any;
  role:any;
  base64Url:any;
  payload:any;
  decodedpayload:any;
  payloadobj:any;
  
  dialogRef:any;
  container1:any;
  public user={
    id:'',
    username:'',
    password:'',
  
  };
  a() {
    
    this.container1=document.querySelector('.container');
    this.sign_in_btn=document.querySelector('#sign-in-btn');
    this.sign_up_btn=document.querySelector('#sign-up-btn');

    this.sign_up_btn=document.getElementById('sign-up-btn')?.addEventListener('click',()=>{ this.container1.classList.add('sign-up-mode');});
    this.sign_in_btn=document.getElementById('sign-in-btn')?.addEventListener('click',()=>{ this.container1.classList.remove('sign-up-mode');});
   

  }
  onLogin() {
    // console.log(this.user);
    if(this.user==null|| this.user.username==""||this.user.password=="" ) {
     
    } else {
    this.services.login(this.user).subscribe(
      (data)=>
      {
        if(data.includes(".")) {

          console.log("Successfully logged in!");
         
          const mapObj:any=JSON.parse(data);
          const jwtToken=mapObj['jwtToken'];
         
          localStorage.setItem('jwtToken',jwtToken);
          console.log(localStorage.getItem('jwtToken'));
         
          this.payload=this.services.getPayload(localStorage.getItem('jwtToken'));
          // console.log(this.payload);
          this.role=this.payload.roles;
          
          // this.services.setAuth(true);
          // console.log(this.services.getAuth());
          this.services.setUser(this.user.username);
          
          if(this.role=="admin") {
          this.router.navigate(['/','admin-homepage']);
          Swal.fire({
            icon:'success',
            title:'Admin Login Successful',
            text:'Congratulations!You have LoggedIn Successfully!'
          })
          } else {
            this.router.navigate(['/','user-homepage']);
            Swal.fire({
              icon:'success',
              title:'User Login Successful',
              text:'Congratulations!You have LoggedIn Successfully!'
            })
          }
        }
        else {
          Swal.fire({
            icon:'error',
            title:'Error occured! Invalid credentials!',
            text:'Please enter valid credentials!'
          })
        }
        
      },
      (error)=>{
        console.log("Exception occurred");
        alert("Invalid Login!");
      }
    );
    }
  }
  logout():void{
    this.isAuthenticated=false;
  }
  isAuthenticate():boolean {
    return this.isAuthenticated;
  }
 
  forgetp() {
    this.dialog.open(ForgetPassComponent);
  }
  onClose() {
    this.dialogRef.close();
  }

}
