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
  app.post("/api/private", function(req, res) {
    console.log("req.post", req.body);
    // db.entry.create({
    //   title: req.body.title,
    //   journal_entry: req.body.journal_entry,
    //   links_images: req.body.links_images
    // })
    //   .then(function(entry) {
    //     res.json(entry);
    //   });
  });

  app.post("/api/private", function(req, res) {
    console.log("req.post", req.body);
    db.entry.create({
      title: req.body.title,
      journal_entry: req.body.journal_entry,
      links_images: req.body.links_images
    })
      .then(function(entry) {
        res.json(entry);
      });
  });

}


// }
// var db = require("./../models/privatepost.js");
// var express = require("express");
// var app = express();
//
// module.exports = function(app) {
//
//   // GET route for getting all of the todos
//   app.get("/api/private", function(req, res) {
//     console.log("req get", req.body)
//     db.entry.findAll({}) // getting all the record under the name of the table under Post - the model is analuges to the table
//       .then(function(dbpost) {
//         res.json(dbpost);
//       });
//
//   });



// .catch(function(err) {
//   // Whenever a validation or flag fails, an error is thrown
//   // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//     res.json(err);
//   });
// });
