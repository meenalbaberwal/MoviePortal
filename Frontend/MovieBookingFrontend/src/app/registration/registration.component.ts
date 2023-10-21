import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SecurityService} from './../Services/security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router,
    private services:SecurityService) { }

  public user = {
    id:'',
    username: '',
    email: '',
    mobileno : '',
    password:'',
    confirmpass:'',
    question:'',
    answer:''
  };
  
  f:any;
  ngOnInit(): void {
  }
  onRegister() {
    // console.log(this.user);
    if(this.user==null||this.user.username==""||this.user.email==""||this.user.mobileno==""||this.user.question==""||this.user.answer==""||this.user.password==""||this.user.confirmpass=="") {
      // alert("Please enter complete details!")
    } else {
    this.services.addUserDetails(this.user).subscribe(
      (data)=>{
        console.log(data);
        // alert('User registered successfully!');
        Swal.fire({
          icon:'success',
          title:'Registration Successful',
          text:'Congratulations!You have Registered Successfully!'
        })
        this.router.navigate(['/','homepage']);
      },
      (error)=>{
        console.log(error);
        alert('Something went wrong');
      }
      );
    }
  }

  reset() {
    this.f=document.getElementById('frm');
    this.f.reset();
  }
}
