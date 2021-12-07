const { ApolloServer, gql } = require('apollo-server');
const { resolvers } = require('./resolvers/resolvers');

const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
  }
  type Query {
    users: [User]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
