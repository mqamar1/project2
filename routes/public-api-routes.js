// this will post to the public section
// this will post to the private section
var db = require("../models/bbamModel");


module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/public", function(req, res) {
    console.log(req)
    db.Post.findAll({}) // 
      .then(function(dbPost) {
        res.json(dbPost);
      });

  });
}
