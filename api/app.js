// Require all of our packages at the top
var express        = require("express");
var morgan         = require("morgan");
var bodyParser     = require('body-parser');
var path           = require('path');
var expressLayouts = require('express-ejs-layouts');
var methodOverride = require('method-override');
var MovieDB        = require('moviedb')('213e6d38b03c7af40fb82d70ad6f0139');
var jwt            = require('jsonwebtoken');
var expressJWT     = require('express-jwt');
var app            = express();
var config         = require('./config/config');
var User           = require('./models/user');
var passport       = require('passport');
var cookieParser   = require("cookie-parser");
var cors           = require('cors');
var secret         = config.secret;

// Setup the connection to our database
var mongoose       = require('mongoose');
mongoose.connect(config.database);

require('./config/passport')(passport);

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

// set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());

app.use('/api', expressJWT({ secret: secret })
  .unless({
    path: [
      { url: '/api/login', methods: ['POST'] },
      { url: '/api/register', methods: ['POST'] }
    ]
  }));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({message: 'Unauthorized request.'});
  }
  next();
});

// Require our routes.js
var routes = require('./config/routes.js')

// Telling our app to use routes.js
app.use(routes);

// start express listening on port 3000
app.listen(process.env.PORT || 3000);
console.log("Express is listening on localhost:3000");



// API Key: 213e6d38b03c7af40fb82d70ad6f0139



