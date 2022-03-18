var models = require('../models');
const bodyParser = require('body-parser');

module.exports = {
  get: function (req, res) {
    let messages = models.messages.getAll();

    res.json(messages);
  }, // a function which handles a get request for all messages
  post: function (req, res) {

    // Express should catch errors on it's own
    //Accesses the Body of the request
    console.log(req.body);
    let messageObj = req.body;

    console.log(messageObj);
    //invoke messages.create() with the message object
    //If conditional verify existence of each property of the message object if(messageObj.text)
    if (messageObj.text) {
      models.messages.create(messageObj);
      res.status(201).send('Message posted');
    } else {
      res.status(500).send('Something went wrong');
    }
    // throw new Error('This is broken');
  } // a function which handles posting a message to the database
};

/*

var data = '';
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    callback(JSON.parse(data));
  });

*/