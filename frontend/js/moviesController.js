angular.module('FlicPic', [])
  .controller('MoviesController', MoviesController);

  // create the controller and inject $http
  MoviesController.$inject = ['$http'];
  function MoviesController($http){

    var self = this; //this is in a variable self because of scope. this is in global scope. would be different in function get presidents
    // self and this is the same below in global scope. 

    //get all of the movies
    this.all = [];

    this.getMovies = getMovies;

    this.title = "FlicPic"
    // this.addMovie = addMovie;
    // this.newMovie = {};

    // get all of the genres to populate them in an array
    self.genres = [];

    function getMovies(queryString) {
      var url = 'https://api.themoviedb.org/3/search/movie?query=' + queryString + '&api_key=213e6d38b03c7af40fb82d70ad6f0139'
      console.log(url);

      $http
        .get()//api url
        .then(function(res) {
          console.log(res);
          self.all = res.data.movies;
        });
    }

    // function getGenres() {
    //   $http
    //     .get('https://api.themoviedb.org/3//genre/movie/list?api_key=213e6d38b03c7af40fb82d70ad6f0139') //https://api.themoviedb.org/3/genre/movie/list?api_key=213e6d38b03c7af40fb82d70ad6f0139
    //     //genre/id/movies gets a list of movies for a particular genre by id
    //     .then(function(res) {
    //       console.log(res);
    //       self.genres = res.data.genres;
    //     });
    // }

    // function getActors(queryString) {
    //   var url = 'https://api.themoviedb.org/3/search/person?query=' + queryString + '&api_key=213e6d38b03c7af40fb82d70ad6f0139'
    //   $http
    //     .get()//api url
    //     .then(function(res) {
    //       console.log(res);
    //       self.all = res.data.movies;
    //     });
    // }

    // function getYears(queryString) {
    //   var url = 'https://api.themoviedb.org/3/discover/movie?primary_release_year=' + queryString + '&api_key=213e6d38b03c7af40fb82d70ad6f0139'
    //   $http
    //     .get()//api url
    //     .then(function(res) {
    //       console.log(res);
    //       self.all = res.data.movies;
    //     });
    // }

  

    // getMovies();
    // getGenres();
    // getActors();
    // getYears();
  }
