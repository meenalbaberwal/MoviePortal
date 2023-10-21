import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../Services/security.service';
import {MatDialogRef} from  '@angular/material/dialog';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

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
    public dialogRef : MatDialogRef<AddmovieComponent>) { }

  ngOnInit(): void {
  }

  addmovie() {
    if(this.movie==null||this.movie.movieName==""||this.movie.theatreName==""||this.movie.imgurl==""||this.movie.seats==""||this.movie.seatsAvailable==""||this.movie.status=="") {

    } else {
    this.services.addMovies(this.movie).subscribe(
      (data) => {
        alert("Movie added!");
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
}
  onClose() {
    this.dialogRef.close();
  }

}
