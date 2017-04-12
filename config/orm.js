var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {

    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

  },
  insertOne: function(table, val, cb) {
    var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES ('" + val + "', " + false + ");"

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });

  },
  updateOne: function(table, id, cb) {
    var queryString = "UPDATE " + table + " SET devoured="+ true +" WHERE id=" + id + ";";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
