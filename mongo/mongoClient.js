const { MongoClient } = require('mongodb');
const { URI } = require('../dev.uri');

// Connection URI
myURI = URI;
const client = new MongoClient(myURI);

module.exports = {
  client,
};
