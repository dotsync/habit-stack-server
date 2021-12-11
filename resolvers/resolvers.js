const { User } = require('../models/User');
const { Habit } = require('../models/Habit');
const {
  addUserQuery,
  getAllUsersQuery,
} = require('../controllers/userControllers');
const { addHabitByUserId } = require('../controllers/habitControllers');
const { client } = require('../mongo/mongoClient');
const mongo = require('mongodb');
const ObjectID = mongo.ObjectID;

const resolvers = {
  Habit: {
    history: (parent) => {
      return parent.history;
    },
  },
  User: {
    habits: (parent) => {
      const promises = parent.habits.map((habit) => {
        return habit;
      });
      return Promise.all(promises);
    },
  },
  Query: {
    users: () => {
      return getAllUsersQuery();
    },
  },
  Mutation: {
    addUser: (parent, { nickName }) => {
      return addUserQuery(nickName);
    },
    addHabit: (parent, { action, prompt, userId }) => {
      return addHabitByUserId(action, prompt, userId);
    },
  },
};

module.exports = { resolvers };
