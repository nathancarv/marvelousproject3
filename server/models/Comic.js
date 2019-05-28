const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
  id: {
    type: String,
  },

  title: {
    type: String,
  },
  
  images: {
    type: [],
  },
  
  description: {
    type: String,
  },
  
  seriesSummary: {
    type: String,
  },
  
  characters: {
    type: [],
  },
  dates: {
    type: [],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref="User"
  }
});

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;