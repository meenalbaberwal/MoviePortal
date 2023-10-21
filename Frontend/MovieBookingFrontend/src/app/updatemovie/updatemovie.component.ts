import { Component, OnInit,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../Services/security.service';
import {MatDialogRef} from  '@angular/material/dialog';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {

  public movie = {
    id:'',
    theatreName: '',
    movieName: '',
    seats : '',
    seatsAvailable:'',
    imgurl:'',
    status:''
  };

  constructor(private router:Router, private services:SecurityService,
    public dialogRef : MatDialogRef<UpdatemovieComponent>,
        @Inject(MAT_DIALOG_DATA) data:any) { 
          this.movie=data.movie;
        }

  ngOnInit(): void {
  
  }

  addmovie() {
    
    this.services.updateMovie(this.movie).subscribe(
      (data) => {
        alert("Movie updated!");
        console.log(this.movie.id);
        this.onClose();
        window.location.reload();
        this.router.navigate(['/','admin-homepage']);
      },
      (error) => {
        console.log(error);
        alert("Something went wrong")
      }
    );
  }
  onClose() {
    this.dialogRef.close();
  }
}
