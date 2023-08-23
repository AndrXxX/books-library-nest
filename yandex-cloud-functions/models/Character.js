const {v4: uuid} = require("uuid");

class Character {
  constructor(id = uuid()) {
    this.id = id;
    this.name = '';
    this.description = '';
    this.modified = '';
    this.thumbnail = '';
    this.comics = [];
  }

  fillByParams(params = {}) {
    const skipKeys = ['id', 'comics'];
    for (const key in this) {
      if (skipKeys.includes(key) || !this.hasOwnProperty(key) || !params[key]) {
        continue;
      }
      this[key] = params[key];
    }
  }
}

module.exports = Character;
