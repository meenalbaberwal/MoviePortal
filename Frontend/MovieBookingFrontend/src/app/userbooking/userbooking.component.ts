import { Component, OnInit,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../Services/security.service';
import {MatDialogRef} from  '@angular/material/dialog';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.css']
})
export class UserbookingComponent implements OnInit {

  public ticket = {
    tid:'',
    id:'',
    no_of_seats:'',
    seatsAvailable:'',
    movieName: '',
    theatreName: '',
  };
 

  constructor(private router:Router, private services:SecurityService,
    public dialogRef : MatDialogRef<UserbookingComponent>,
        @Inject(MAT_DIALOG_DATA) data:any) {
          this.ticket=data.ticket ;
         }

  ngOnInit(): void {
  }
  book() {
    if(this.ticket.no_of_seats==""||this.ticket.no_of_seats==null) {

    }
    else {
    this.services.bookTicket(this.ticket.id,this.ticket).subscribe(
      (data) => {
        // alert("Congratulations! Ticket Booked.");
        this.onClose();
        window.location.reload();
        // this.router.navigate(['/','user-homepage']);
        Swal.fire({
          icon:'success',
          title:'Booking Confirmed',
          text:'Congratulations! Your Reservations are confirmed!'
        })
      },
      (error) => {
        console.log(error);
        alert("Something went wrong")
      }
    );
    }
  }
  onClose() {
    this.dialogRef.close();
  }

}
