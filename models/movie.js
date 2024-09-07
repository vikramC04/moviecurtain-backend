const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  email : {
    type: String,
    required: true
  },
  movid: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Movie', movieSchema )