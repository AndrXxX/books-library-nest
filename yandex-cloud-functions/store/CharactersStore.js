const CharacterModel = require("../models/Character");
const comicsStore = require("./ComicsStore");

class CharacterStore {
  async getAll() {
    return CharacterModel.find().populate('comics').select('-__v');
  }
  async get(id) {
    return CharacterModel.findOne({id});
  }
  async add(params) {
    const character = new CharacterModel(params);
    character.comics = [];
    if (!params.comics) {
      await character.save();
      return character;
    }
    const comics = await Promise.all(params.comics.map(async rawComics => {
      return await comicsStore.create(rawComics);
    }))
    comics.forEach(comic => character.comics.push(comic.id))
    await character.save();
    return character;
  }
}

module.exports = new CharacterStore();
