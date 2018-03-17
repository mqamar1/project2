// this will post to the public section
// this will post to the private section
var db = require("../models");


module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/public", function(req, res) {
    // console.log(req)
    console.log(req)
    console.log(req.body)
    db.EscapePost.findAll({}) //
      .then(function(dbPost) {
        res.json(dbPost);
      });

  });
}
