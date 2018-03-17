// this will post to the private section
var db = require("../models");


module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/private", function(req, res) {
    console.log(req)
    console.log(req.body)
    db.User.findAll({}) // getting all the record under the name of the table under Post - the model is analuges to the table
      .then(function(dbPost) {
        res.json(dbPost);
      });

  });
}
