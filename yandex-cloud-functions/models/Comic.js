const { Schema, model } = require('mongoose');

const  comicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model('Comic', comicSchema);

