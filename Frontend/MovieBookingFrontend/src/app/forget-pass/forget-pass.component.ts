import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../Services/security.service';
import {MatDialogRef} from  '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  constructor(private services:SecurityService,public dialogRef : MatDialogRef<ForgetPassComponent>,
    private router:Router) { }

  public userreset = {
  
    username: '',
    password:'',
    question:'',
    answer:''
  };

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }
 
  T:any;
  a() {
    if(this.userreset.username==null||this.userreset.username=="") {
      // alert("Please enter username!")
    } 
    else {
    this.T = document.getElementById('reset');
    console.log(this.T);
    this.T.style.display = "block";
    }
    
  }

  reset() {
    if(this.userreset==null||this.userreset.password==""||this.userreset.question==""||this.userreset.answer=="") {
    }
    else {
    this.services.forgetPass(this.userreset).subscribe(
      (data) => {
       
        this.onClose();
        // window.location.reload();
        Swal.fire({
          icon:'success',
          title:'Password Updated',
          text:'Congratulations! Your password have been reset!'
        })
      },
      (error) => {
        alert("Something went wrong");
      }
    );
    }
  }
}
