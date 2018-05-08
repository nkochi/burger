var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  },
  insertOne: function(burgerName) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?);";
    console.log(queryString);
    connection.query(queryString, burgerName, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  },
  updateOne: function(burgerId) {
    var queryString =
      "UPDATE burgers SET devoured = true WHERE id = ?;";

      connection.query(queryString, burgerId, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
        console.log(result);
      });
  }
};

module.exports = orm;
