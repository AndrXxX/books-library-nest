const {v4: uuid} = require("uuid");

class Comic {
  constructor(id = uuid()) {
    this.id = id;
    this.name = '';
  }

  fillByParams(params = {}) {
    const skipKeys = ['id'];
    for (const key in this) {
      if (skipKeys.includes(key) || !this.hasOwnProperty(key) || !params[key]) {
        continue;
      }
      this[key] = params[key];
    }
  }
}

module.exports = Comic;
