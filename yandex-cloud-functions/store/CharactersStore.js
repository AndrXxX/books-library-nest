const Character = require("../models/Character");

const charactersStore = {
  items: [],
  getAll: function() {
    return this.items.slice();
  },
  add: function(params) {
    const comic = new Character();
    comic.fillByParams(params)
    this.items.push(comic);
    return comic;
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
