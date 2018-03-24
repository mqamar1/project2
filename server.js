var express    = require('express')
var app        = express()
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env        = require('dotenv').load()
var exphbs     = require('express-handlebars')
// var usery = require('./app/controllers/authcontroller')



//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// didnt work app.get('app/assets/css/private.css', function(req, res){ res.send('./app/assets/css/private.css'); res.end(); });

 // For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session());
// console.log(usery.userID);
 // persistent login sessions


 //For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static('public'));


//Models
var models = require("./app/models");


//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);


//load passport strategies
require('./app/config/passport/passport.js')(passport,models.user1);


//Sync Database
models.sequelize.sync().then(function(){
console.log('Nice! Database looks fine')

}).catch(function(err){
console.log(err,"Something went wrong with the Database Update!")
});



app.listen(process.env.PORT || 8080, function(err){
if(!err)
console.log("Site is live"); else console.log(err)

});




app.use(express.static("public"));

// =============================================================
//
// my routes in route folder
require("./app/routes/private-api-routes.js")(app);
require("./app/routes/public-api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);
// do I need api for logIn - api route ?
// Syncing our sequelize models and then starting our Express app
// =============================================================
