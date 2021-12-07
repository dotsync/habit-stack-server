const { USERS } = require('../database/database.js');

const resolvers = {
  Query: {
    books: () => USERS,
  },
};

module.exports = { resolvers };
