class User {
  constructor(nickName, userId) {
    this.userId = userId;
    this.nickName = nickName;
    this.habits = [];
  }
}

module.exports = { User };
