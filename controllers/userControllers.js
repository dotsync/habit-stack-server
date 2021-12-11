const { client } = require('../mongo/mongoClient');
const { User } = require('../models/User');
const mongo = require('mongodb');
const ObjectID = mongo.ObjectID;

const addUserQuery = async (nickName) => {
  try {
    const newUser = new User(nickName, new ObjectID().toString());
    await client.connect();
    const userCollection = client.db('habit-app').collection('users');
    // Check database to make sure that the nickName doesn't exist
    const userCheck = await userCollection.findOne({ nickName });
    if (userCheck !== null) {
      throw new Error('USER ALREADY EXISTS');
      return null;
    } else {
      const insertedUser = await userCollection.insertOne(newUser);
      return newUser;
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

const getAllUsersQuery = async () => {
  try {
    await client.connect();
    const database = client.db('habit-app');
    const userCollection = database.collection('users');
    // the reason we have to use toArray, is the the .find method returns a find cursor
    const userList = await userCollection.find({}).toArray();
    return userList;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

module.exports = { addUserQuery, getAllUsersQuery };
