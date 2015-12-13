// Require all of our packages at the top
var express        = require("express");
var morgan         = require("morgan");
var bodyParser     = require('body-parser');
var path           = require('path');
var expressLayouts = require('express-ejs-layouts');
var methodOverride = require('method-override');
var app            = express();


// Setup the connection to our database
var mongoose       = require('mongoose');
mongoose.connect = 'mongodb://localhost:27017/flicpic';

// Require our routes.js
var routes = require('./config/routes.js')

// Set up middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Telling our app to use routes.js
app.use(routes);

// start express listening on port 3000
app.listen(3000);
console.log("Express is listening on localhost:3000");