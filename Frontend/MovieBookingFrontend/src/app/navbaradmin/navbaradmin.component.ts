import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddmovieComponent } from '../addmovie/addmovie.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {

  constructor(private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
  }

  add() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.position = {
  //     'top': '0',
  //     left: '0'
  // };
    this.dialog.open(AddmovieComponent);
}

 //logout
 logOut() {
  localStorage.removeItem('username')
  localStorage.removeItem('jwtToken')
  this.router.navigate(['/homepage'])
}
}
