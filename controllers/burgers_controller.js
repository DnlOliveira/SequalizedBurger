var express = require("express");
var router = express.Router();

var db = require("../models");
var path = require('path');


//Main route call the 'findAll' method to pull all burgers
// in the db.
router.get("/", function(req, res) {
  db.Burger.findAll({
    order: "burger_name"
  }).then(function(burgerData){
    var hbsObject = {
      burgers: burgerData
    };
    res.render("index", hbsObject);
  });
});

// Create route call the 'create' method to insert a burger, then it redirects to main route to update results from database
router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(data, err){
    res.redirect("/");
  })
});

// Update route updates the inserted burger to devoured if devour button is hit. also redirects to update db results.
router.put("/burgers/update", function(req, res) {
  var burgerId = req.body.id;
  console.log(burgerId);
  burger.update(burgerId, function(result) {
    res.redirect("/");
  });
});


module.exports = router;
