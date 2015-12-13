var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var moviesController = require('../controllers/movies.js');      

// http://127.0.0.1:3000/movies
router.route('/movies')

  //GET all movies
  .get(moviesController.getAll)

  //POST a new blob
  .post(moviesController.createMovie);


router.route('/movies/:id')

  // GET return specific movie
  .get(moviesController.getMovie)

  // PATCH update existing movie
  .patch(moviesController.updateMovie)

  // DELETE remove specific movie from DB
  .delete(moviesController.removeMovie);


module.exports = router


// // config/routes.js
// module.exports = {
//   url : 'mongodb://localhost/tmdbapi'
// }