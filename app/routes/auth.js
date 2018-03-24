var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

// app.get('/signup', authController.signup);


app.get('/logIn', authController.signin);


app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/logout'}
                                        ));
app.get('/', authController.signin);

app.get('/dashboard',isLoggedIn, authController.dashboard);

app.get('/signout', authController.signout);


app.get('/logout',authController.logout);


app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard'}

                                                    ));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/dashboard');
}


}
