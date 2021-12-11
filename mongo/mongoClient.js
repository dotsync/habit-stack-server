const { MongoClient } = require('mongodb');
const { URI } = require('../dev.uri');

// Connection URI

const client = new MongoClient(URI);

module.exports = {
  client,
};
