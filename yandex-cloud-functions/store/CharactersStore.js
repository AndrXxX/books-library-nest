const CharacterModel = require("../models/Character");
const comicsStore = require("./ComicsStore");

class CharacterStore {
  async getAll() {
    return CharacterModel.find().populate('comics').select('-__v');
  }
  async get(id) {
    return CharacterModel.findOne({id});
  }
  async add(rawParams) {
    let { comics, ...params } = rawParams;
    const character = new CharacterModel(params);
    character.comics = [];
    const comicsModels = await Promise.all((comics || []).map(async rawComic => {
      return await comicsStore.create(rawComic);
    }))
    comicsModels.forEach(comic => character.comics.push(comic._id))
    await character.save();
    return character;
  }
}

module.exports = new CharacterStore();
