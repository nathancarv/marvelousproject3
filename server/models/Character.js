const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id: {
    type: String,
  },

  name: {
    type: String,
  },
  
  image: {
    type: String,
  },
  
  description: {
    type: String,
  },
  
  comics: {
    type: [],
  },
  
  stories: {
    type: [],
  },

  series: {
    type: [],
  },
  userId: {
     type: mongoose.Schema.Types.ObjectId, ref="User"
  }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;