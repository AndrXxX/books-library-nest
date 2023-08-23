const ComicModel = require("../models/Comic");

class ComicsStore {
  async create(data) {
    const comic = (await this.findByName(data.name)) || new ComicModel(data);
    await comic.save();
    return comic;
  }
  async findByName(name) {
    return ComicModel.findById(name).select('-__v');
  }
}

module.exports = new ComicsStore();
