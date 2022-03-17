var models = require('../models');

module.exports = {
  get: function (req, res) {

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    req.body; //Accesses the Body of the request
    //invoke messages.create()
    //If it resolves (promise ?) correctly, then send a positive response back



  } // a function which handles posting a message to the database
};