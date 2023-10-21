import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../Services/security.service';
import {MovieList} from '../admin-homepage/MovieList';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddmovieComponent } from '../addmovie/addmovie.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserbookingComponent } from '../userbooking/userbooking.component';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit,AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator|any;

  constructor(private router:Router, 
    private services:SecurityService,
    private dialog:MatDialog) { }

    s:any;
    user:any;
    

  movielist: MovieList[] = [];



  public displayedColumns = ['id', 'theatreName', 'movieName', 'seats', 'seatsAvailable', 'seatsBooked','status','book'];
  
  public datasource = new MatTableDataSource<MovieList>();
  
  searchQuery:string='';
  get filteredMovies():MovieList[] {
    if(!this.searchQuery) {
      return this.movielist;
    }
    const lowerCaseQuery = this.searchQuery.toLowerCase();
    return this.movielist.filter(movie=>
      movie.movieName.toLowerCase().includes(lowerCaseQuery));
  }
  
  ngOnInit(): void {
    this.getQuestions();
  }

  ngAfterViewInit(): void {
    this.datasource.sort=this.sort;
    this.datasource.paginator = this.paginator;
  }

 

  getQuestions() {
    
    this.services.getMoviesUser().subscribe(
      (data) => {
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
  book(ele:any) {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      ticket:ele
  };
  this.dialog.open(UserbookingComponent,dialogConfig);
    
  }
}
 

  