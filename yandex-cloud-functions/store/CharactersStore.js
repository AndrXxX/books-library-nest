const Character = require("../models/Character");
const comicsStore = require("./ComicsStore");

const charactersStore = {
  items: [],
  getAll: function() {
    return this.items.slice();
  },
  add: function(params) {
    const character = new Character();
    character.fillByParams(params)
    params.comics && params.comics.forEach(comic => {
      const comicModel = comicsStore.getByName(comic.name) || comicsStore.add(comic);
      character.comics.push(comicModel);
    })
    this.items.push(character);
    return character;
  },
  get: function(id) {
    return this.items.find((item) => item.id === id);
  },
  delete: function(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  },
};

module.exports = charactersStore;
