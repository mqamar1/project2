// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express    = require('express')
var app        = express()
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env        = require('dotenv').load()
var exphbs     = require('express-handlebars')

// Sets up the Express App
// =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./app/models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.set('views', './app/views')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get('/', function(req, res){
res.send('Welcome to Passport with Sequelize');
});

// Static directory -- changing html pages available under my "public folder"
app.use(express.static("./app/public"));


	//Models
    var models = require("./app/models");


    //Routes
    var authRoute = require('./app/routes/auth.js')(app,passport);
    console.log(models.User)


    //load passport strategies
    require('./app/config/passport/passport.js')(passport, models.User);

// =============================================================
//
// my routes in route folder
// require("./app/routes/private-api-routes.js")(app);
// require("./app/routes/public-api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);
// do I need api for logIn - api route ?
// Syncing our sequelize models and then starting our Express app
// =============================================================

//Sync Database
models.sequelize.sync().then(function(){
console.log('Nice! Database looks fine')

}).catch(function(err){
console.log(err,"Something went wrong with the Database Update!")
});



app.listen(8080, function(err){
if(!err)
console.log("Site is live"); else console.log(err)

});
// var express    = require('express')
//     var app        = express()
//     var passport   = require('passport')
//     var session    = require('express-session')
//     var bodyParser = require('body-parser')
//     var env        = require('dotenv').load()
//     var exphbs     = require('express-handlebars')
//
//
//
//     //For BodyParser
//     app.use(bodyParser.urlencoded({ extended: true }));
//     app.use(bodyParser.json());
//
//
//      // For Passport
//     app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
//     app.use(passport.initialize());
//     app.use(passport.session()); // persistent login sessions
//
//
//      //For Handlebars
//     app.set('views', './app/views')
//     app.engine('hbs', exphbs({extname: '.hbs'}));
//     app.set('view engine', '.hbs');
//
//
//     app.get('/', function(req, res){
// 	  res.send('Welcome to Passport with Sequelize');
// 	});
//
//
// 	//Models
//     var models = require("./app/models");
//
//
//     //Routes
//     var authRoute = require('./app/routes/auth.js')(app,passport);
//
//
//     //load passport strategies
//     require('./app/config/passport/passport.js')(passport,models.user);
//
//
//     //Sync Database
//    	models.sequelize.sync().then(function(){
//     console.log('Nice! Database looks fine')
//
//     }).catch(function(err){
//     console.log(err,"Something went wrong with the Database Update!")
//     });
//
//
//
// 	app.listen(5000, function(err){
// 		if(!err)
// 		console.log("Site is live"); else console.log(err)
//
// 	});
