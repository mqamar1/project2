// html rote will direct user to the html pages with formes



// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/public.html"));
  });

  // cms route loads cms.html
  app.get("/logIn", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/logIn.html"));
  });

  app.get("/private", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/private.html"));
  });


};
