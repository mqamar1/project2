// this will post to the private section
var db = require("../models");


module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/private", function(req, res) {
    console.log("req get", req.body)
    db.EscapePost.findAll({}) // getting all the record under the name of the table under Post - the model is analuges to the table
      .then(function(dbpost) {
        res.json(dbpost);
      });

  });
  app.post("/api/private", function(req, res) {
    console.log("req.post", req.body.title, req.body.journal_entry);
    db.EscapePost.create({
      title: req.body.title,
      journal_entry: req.body.journal_entry,
      // links_images: req.body.links_images
    })
      .then(function(entry) {
        res.json(entry);
      });
  });


}
