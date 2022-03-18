var db = require('../db');
// db.query(
//   'SELECT * FROM `messages`',
//   function(err, results, fields) {
//     console.log('results:', results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
module.exports = {
  getAll: function () {
    let messages;
    db.query(
      'SELECT * FROM messages',
      function(err, results) {
        if (err) {
          console.log(err);
        } else {
          messages = results;
          console.log(results); // results contains rows returned by server
        }
      }
    );
    return messages;
  }, // a function which produces all the messages
  create: function (messageObj) { // parameter: resFunc
    //! Accessing the request body will result in a buffered object, need to use toString();
    //Search our user table for the primary key user id, then parse the username from that query
    db.query(
      `INSERT INTO messages (message, username, roomname) VALUES ('${messageObj.text}', '${messageObj.username}', '${messageObj.roomname}')`


    );
  } // a function which can be used to insert a message into the database
};