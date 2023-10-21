import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing'
import { SecurityService } from './security.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieList } from '../admin-homepage/MovieList';
import { Observable } from 'rxjs';

fdescribe('SecurityService', () => {
  let service: SecurityService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],

      providers: [SecurityService]
    });
    service = TestBed.inject(SecurityService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // To Create Service
  fit('should be created', () => {
    expect(service).toBeTruthy();
  });



  // Login Test Case
  fit('should send a POST request to login', () => {

    const user = {username: 'John123', password: '123' };
    const response = 'Success';

    service.login(user).subscribe((login) => {
    expect(login).toEqual(response);
    });

   const req = httpMock.expectOne('http://localhost:8083/call/consumer/login', 'Sample');

    expect(req.request.method).toBe('POST');

    req.flush(response);

  });


  // User Registration Test Case
  fit('should send a POST request to addUserDetails', ()=>{
    const user={
    username: 'John123',

    password: '123',

    confirmpass:'123',

    email: 'test@email.com',

    mobileno:'9878282782',

    question: 'Pet Name?',

    answer: 'Tommy'};

    const response = 'Success';

    service.addUserDetails(user).subscribe((addUserDetails) => {
    expect(addUserDetails).toEqual(response);
    });

   const req = httpMock.expectOne('http://localhost:8084/auth/v1/addUser', 'Sample');

    expect(req.request.method).toBe('POST');

    req.flush(response);

  });



  // Reset Password Test Case
  fit('should send a PUT request to forgetPass', () => {

    const userreset = {
      
      username: 'John123', 
      
      password: '123', 
      
      question: 'Pet Name?',

      answer:'Tommy'
    };
    const response = 'Success';

    service.forgetPass(userreset).subscribe((forgetPass) => {
    expect(forgetPass).toEqual(response);
    });

   const req = httpMock.expectOne('http://localhost:8084/user/', 'Sample');

    expect(req.request.method).toBe('PUT');

    req.flush(response);

  });


  // Get Movies Test Case

  fit('should send a GET request to getMovies', () => {

    const movies: MovieList[]=[ 
      {
      id: '394cfb57-f904-4491-8e8d-47761900f17f',
      status: 'Book ASAP',
      imgurl: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
      theatreName: 'Miraj',
      seatsAvailable: 90,
      movieName: 'Fight Club',
      seatsBooked: 10,
      seats: 100
     },
     {
      id: '5d5330e4-b960-41a3-8830-e2b341781002',
      status: 'Book ASAP',
      imgurl: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
      theatreName: 'Miraj',
      seatsAvailable: 100,
      movieName: 'Spiderman',
      seatsBooked: 0,
      seats: 100
     },
    ];

    service.getMovies().subscribe((getMovies) => {
    expect(getMovies).toEqual(movies);
    });

   const req = httpMock.expectOne('http://localhost:8083/api/admin/movie/', 'Sample');

    expect(req.request.method).toBe('GET');

  });



// Add Movie Test Case
  fit('should send a POST request to addMovies', () => {

    const movie = {
      theatreName: 'Abhiruchi',
    movieName: 'Antman',
    seats : '100',
    seatsAvailable:'100',
    imgurl:'https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg',
    status:'Book ASAP'
     };
    const response = 'Success';

    service.addMovies(movie).subscribe((addMovies) => {
    expect(addMovies).toEqual(response);
    });

   const req = httpMock.expectOne('http://localhost:8083/api/admin/movie/', 'Sample');

    expect(req.request.method).toBe('POST');

    req.flush(response);

  });



  // Update Movie Test Case
  fit('should send a PUT request to updateMovie', () => {

    const movie = {
    id:'1',
    theatreName: 'Abhiruchi',
    movieName: 'Antman',
    seats : '100',
    seatsAvailable:'80',
    imgurl:'https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg',
    status:'Book ASAP'
     };
    const response = 'Success';
    service.updateMovie(movie).subscribe((updateMovie) => {
    expect(updateMovie).toEqual(response);
    });

   const req = httpMock.expectOne(`http://localhost:8083/api/admin/movie/1`, 'Sample');

    expect(req.request.method).toBe('PUT');

    req.flush(response);

  });

  // Delete Movie Test Case
  fit('should send a DELETE request to deleteMovie', () => {

    const id='394cfb57-f904-4491-8e8d-47761900f17f'
    const response = 'Success';
    service.deleteMovie(id).subscribe((deleteMovie) => {
    expect(deleteMovie).toEqual(response);
    });

   const req = httpMock.expectOne(`http://localhost:8083/api/admin/movie/${id}`, 'Sample');

    expect(req.request.method).toBe('DELETE');

    req.flush(response);

  });

  // Get Movies USer Test case

  fit('should send a GET request to getMoviesUser', () => {

    const movies: MovieList[]=[ 
      {
      id: '394cfb57-f904-4491-8e8d-47761900f17f',
      status: 'Book ASAP',
      imgurl: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
      theatreName: 'Miraj',
      seatsAvailable: 90,
      movieName: 'Fight Club',
      seatsBooked: 10,
      seats: 100
     },
     {
      id: '5d5330e4-b960-41a3-8830-e2b341781002',
      status: 'Book ASAP',
      imgurl: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
      theatreName: 'Miraj',
      seatsAvailable: 100,
      movieName: 'Spiderman',
      seatsBooked: 0,
      seats: 100
     },
    ];

    service.getMoviesUser().subscribe((getMoviesUser) => {
    expect(getMoviesUser).toEqual(movies);
    });

   const req = httpMock.expectOne('http://localhost:8083/api/user/ticket/movie/', 'Sample');

    expect(req.request.method).toBe('GET');

  });


  // Book Ticket User Test Case
  fit('should send a POST request to bookTicket', () => {

    const ticket={
      id:'8436e910-a2ca-4252-9ee7-3786b8cae1bb',
      no_of_seats:'10',
    };
    
    const response = 'Success';

    service.bookTicket(ticket.id,ticket.no_of_seats).subscribe((bookTicket) => {
    expect(bookTicket).toEqual(response);
    });

    const req = httpMock.expectOne('http://localhost:8083/api/user/ticket/8436e910-a2ca-4252-9ee7-3786b8cae1bb', 'Sample');

    expect(req.request.method).toBe('POST');

    req.flush(response);

  });


});
