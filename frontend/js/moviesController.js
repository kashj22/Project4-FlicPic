angular.module('FlicPic', [])
  .controller('MoviesController', MoviesController);

  MoviesController.$inject = ['$http'];
  function MoviesController($http){

    var self = this; //this is in a variable self because of scope. this is in global scope. would be different in function get presidents
    // self and this is the same below in global scope. 

    this.all = [];
    this.addMovie = addMovie;
    this.newMovie = {};

    function getMovies() {
      $http
        .get('http://localhost:3000/movies')
        .then(function(res) {
          console.log(res);
          self.all = res.data.movies;
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
  }
