const { USERS } = require('../database/database.js');

const resolvers = {
  Query: {
    users: () => USERS,
  },
};

module.exports = { resolvers };
