import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Microservices } from '../Models/Microservices';
import { MovieList } from '../admin-homepage/MovieList';
import { RowOutlet } from '@angular/cdk/table';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})


export class SecurityService {

  constructor(private authClient : HttpClient, private router:Router) { }

  u:any;
  isAuthenticated:boolean=false;
  
  jwtToken=localStorage.getItem('jwtToken');

  headers=new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);

  private Register:string=`http://localhost:8084/auth/v1/addUser`;
  private Pass:string=`http://localhost:8084/user/`;
  private Login:string=`http://localhost:8083/call/consumer/login`;
  private Movies:string=`http://localhost:8083/api/admin/movie/`;
  private MoviesUser:string=`http://localhost:8083/api/user/ticket/movie/`;
  private MovieTicket:string=`http://localhost:8083/api/user/ticket/`;
  

  //add New User
  public addUserDetails(user:any) {
    return this.authClient.post(this.Register,user);
  }

  //Login User
  public login(user:any) {
    return this.authClient.post(this.Login, user, {responseType : 'text'});
  }
 

  //Reset Password
  public forgetPass(userreset:any) {
    return this.authClient.put(this.Pass,userreset,{responseType:'text'});
  }

  //Get Movies
  public getMovies():  Observable<MovieList[]> {
    console.log(this.headers);
    return this.authClient.get<MovieList[]>(`${this.Movies}`,{headers:this.headers});    
  }
 
  //Add Movies
  public addMovies(movie:any) {
    return this.authClient.post(this.Movies,movie,{headers:this.headers});
  }

  //Update Movies
  public updateMovie(movie:any) {
    return this.authClient.put(`${this.Movies}${movie.id}`,movie,{headers:this.headers});
  }

  //Delete Movies
  public deleteMovie(id:string) {
    return this.authClient.delete(`${this.Movies}${id}`,{headers:this.headers});
  }

  //Get Movies user
  public getMoviesUser() : Observable<MovieList[]> {
    return this.authClient.get<MovieList[]>(this.MoviesUser,{headers:this.headers});
  }
  
  //Book Ticket
  public bookTicket(id_fk:string,ticket:any) {
    return this.authClient.post(`${this.MovieTicket}${id_fk}`,ticket,{responseType : 'text'});
  }
  

  //Store username in localstorage
  public setUser(username:string) {
    localStorage.setItem('username',username);
  }

  public getUser() {
    return localStorage.getItem('username');
  }

  
  //Fetch Role
  public getPayload(jwtToken:any) {
    if(jwtToken!=null) {
    return JSON.parse(atob(jwtToken.split(".")[1]));
    }
    else {
      return null;
    }
    
  }
}
