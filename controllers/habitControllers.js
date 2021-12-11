const { client } = require('../mongo/mongoClient');
const { Habit } = require('../models/Habit');

const addHabitByUserId = async (action, prompt, userId) => {
  try {
    await client.connect();
    const newHabit = new Habit(action, prompt);
    newHabit.userId = userId;
    const userCollection = client.db('habit-app').collection('users');
    const user = await userCollection.findOne({ userId: userId });
    if (user === null) {
      throw new Error('Unable to add Habit because User id was not found');
      return null;
    } else {
      userCollection.update(
        { userId: userId },
        { $push: { habits: newHabit } },
      );
      return newHabit;
    }
  } finally {
    await client.close();
  }
};

module.exports = { addHabitByUserId };
