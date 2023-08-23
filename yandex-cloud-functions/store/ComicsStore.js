const ComicModel = require("../models/Comic");

class ComicsStore {
  async create(data) {
    let comic = await this.findByName(data.name);
    if (comic) {
      return comic;
    }
    comic = new ComicModel(data);
    await comic.save();
    return comic;
  }
  async findByName(name) {
    return ComicModel.findOne({name}).select('-__v');
  }
}

module.exports = new ComicsStore();
