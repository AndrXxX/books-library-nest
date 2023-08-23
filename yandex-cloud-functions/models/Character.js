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
    const skipKeys = ['id'];
    for (const key in this) {
      if (skipKeys.includes(key) || !this.hasOwnProperty(key) || !params[key]) {
        continue;
      }
      this[key] = params[key];
    }
  }
}

// id: 1,
//   name: "Имя персонажа",
//   description: "описание...",
//   modified: "2020-07-21",
//   thumbnail: "http://...",
//   comics: [
//   {
//     id: 1,
//     name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1"
//   }
// ]

module.exports = Character;
