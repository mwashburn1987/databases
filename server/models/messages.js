var db = require('../db');

module.exports = {
  getAll: function () {
    db.connection.query(
      'SELECT * FROM `messages` ORDER BY `date_time` [ASC|DESC]',
      function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      }
    );
  }, // a function which produces all the messages
  create: function (messageObj) { // parameter: resFunc
    //! Accessing the request body will result in a buffered object, need to use toString();
    //Search our user table for the primary key user id, then parse the username from that query
    db.connection.query(
      `INSERT INTO 'messages' ('message', 'username', 'roomname', 'date_time') VALUES ('${message}') `,
      function () {

      });
  } // a function which can be used to insert a message into the database
};