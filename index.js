const { ApolloServer, gql } = require('apollo-server');
const { resolvers } = require('./resolvers/resolvers');
const { client } = require('./mongo/mongoClient');
const PORT = 4000;

const typeDefs = gql`
  type Day {
    date: String
    status: String
  }
  type Habit {
    userId: String
    action: String
    prompt: String
    history: [Day]
  }
  type User {
    userId: String
    nickName: String!
    habits: [Habit]
  }
  type Query {
    users: [User]
  }
  type Mutation {
    addUser(nickName: String): User
    addHabit(action: String, prompt: String, userId: String): Habit
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({
    port: PORT,
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    // async function run() {
    //   try {
    //     // Connect the client to the server
    //     await client.connect();
    //     // Establish and verify connection
    //     await client.db('admin').command({ ping: 1 });
    //     console.log('Connected successfully to Database');
    //   } finally {
    //     // Ensures that the client will close when you finish/error
    //     await client.close();
    //   }
    // }
    // run().catch(console.dir);
  });
