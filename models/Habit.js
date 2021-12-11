class Habit {
  constructor(action, prompt) {
    this.action = action;
    this.prompt = prompt;
    this.history = [];
  }
}

module.exports = { Habit };
