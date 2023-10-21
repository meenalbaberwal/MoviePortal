import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../Services/security.service';
import { MovieList } from './MovieList';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddmovieComponent } from '../addmovie/addmovie.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UpdatemovieComponent } from '../updatemovie/updatemovie.component';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit,AfterViewInit {

  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator|any;

  constructor(private router:Router, 
    private services:SecurityService,
    private dialog:MatDialog) { }

    s:any;
    user:any;
    

  movielist: MovieList[] = [];



  public displayedColumns = ['id', 'theatreName', 'movieName', 'seats', 'seatsAvailable', 'seatsBooked','status','update','delete'];
  // datasource = new MatTableDataSource(this.movielist);
  public datasource = new MatTableDataSource<MovieList>();
  
  public doFilter = (t:any) => {
    
    this.datasource.filter = t.target.value;
    
  }
  
  ngOnInit(): void {
    this.fetchMovies();
  }

  ngAfterViewInit(): void {
    this.datasource.sort=this.sort;
    this.datasource.paginator = this.paginator;
  }

 

  fetchMovies() {
    
    this.services.getMovies().subscribe(
      (data) => {
        console.log(data);
        this.user=this.services.getUser();
        
        this.datasource.data=data;

        this.movielist=data;
        
        if(data.length==0) {
          this.router.navigate(['/','admin-homepage']);
        }
      },
      (err) => {
          console.log("error")
      }
    );
  }
  add() {
      this.dialog.open(AddmovieComponent);
  }
 
 
  update(ele:any) {
    // this.services.
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      movie:ele
  };
  this.dialog.open(UpdatemovieComponent,dialogConfig);
  }
  userPreference:any;
  delete(id:string) {
    if (confirm("Do you want to delete movie?") == true) {
     this.services.deleteMovie(id).subscribe(
      (data)=> {
        console.log("error occured");
      },
      (error) => {
        
        alert("Deleted Successfully");
        window.location.reload();
        this.router.navigate(['/','admin-homepage']);
      }
    );
  } 
  }
  
}
