export const Microservices : {[key: string]: string} = {
    // give like this : 
    // "ms-name" : "http://localhost:[port-no.]/[context-root]"
    // "auth"      : "http://localhost:8083/call/consumer/login",
    // "register"  : "http://localhost:8084/auth/v1/addUser",
    // "ForgetPass": "http://localhost:8084/user/",
    // "movies"    : "http://localhost:8083/admin/movie/",
    // "moviesuser": "http://localhost:8083/ticket/movie",
    // "ticket"    : "http://localhost:8083/ticket/",
    "Register":"https://sb1cv4xr9a.execute-api.us-west-2.amazonaws.com/MeenalMovieWeb/mymovieresource/userresource",
  "Login":"https://sb1cv4xr9a.execute-api.us-west-2.amazonaws.com/MeenalMovieWeb/mymovieresource/userresource/userlogin",
  "Movies":"https://sb1cv4xr9a.execute-api.us-west-2.amazonaws.com/MeenalMovieWeb/mymovieresource",
  "MoviesUser":"https://sb1cv4xr9a.execute-api.us-west-2.amazonaws.com/MeenalMovieWeb/mymovieresource/mymovieresourceuser",
}