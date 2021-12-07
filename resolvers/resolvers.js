const { books } = require('../database/database.js');

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = { resolvers };
