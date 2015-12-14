angular.module('FlicPic', [])
  .controller('MoviesController', MoviesController);

  // create the controller and inject $http
  MoviesController.$inject = ['$http'];
  function MoviesController($http){

    var self = this; //this is in a variable self because of scope. this is in global scope. would be different in function get presidents
    // self and this is the same below in global scope. 

    //get all of the movies
    this.all = [];
    // this.addMovie = addMovie;
    // this.newMovie = {};

    function getMovies() {
      $http
        .get('https://api.themoviedb.org/3/discover/movie?api_key=213e6d38b03c7af40fb82d70ad6f0139')//api url
        .then(function(res) {
          console.log(res);
          self.all = res.data.movies;
        });
    }

    function getGenres() {
      $http
        .get('https://api.themoviedb.org/3/genre/movie/list?api_key=213e6d38b03c7af40fb82d70ad6f0139')
        .then(function(res) {
          console.log(res);
          self.all = res.data.genres;
        });
    }

    function getActors() {
      $http
        .get('https://api.themoviedb.org/3/discover/movie?api_key=213e6d38b03c7af40fb82d70ad6f0139')
        .then(function(res) {
          console.log(res);
          self.all = res.data.actors;
        });
    }

    function getYears() {
      $http
        .get('https://api.themoviedb.org/3/discover/movie?api_key=213e6d38b03c7af40fb82d70ad6f0139')
        .then(function(res) {
          console.log(res);
          self.all = res.data.years;
        });
    }

    // function addMovie(){
    //   $http
    //     .post('http://localhost:3000/movies', self.newMovie)
    //     .then(function(res) {
    //       console.log(res);
    //     })
    //   self.all.push(self.newMovie);
    //   self.newMovie = {};
    // }

    getMovies();
    getGenres();
    getActors();
    getYears();
  }
