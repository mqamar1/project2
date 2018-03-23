var exports = module.exports = {}

// exports.userID = userID;

exports.signup = function(req,res){

	res.render('signin')


}

exports.signin = function(req,res){

	res.render('signin')
}

exports.dashboard = function(req,res){

	res.render('dashboard')
}


exports.signout = function(req,res){

	res.render('signout')
}


exports.logout = function(req,res){
res.redirect('signout');
  req.session.destroy(function(err) {
  res.redirect('signout');
  });

}
