const mongoose = require('mongoose');

// Don't forget to set "MONGODB_URI" in ~/server/.env
const uri = process.env.MONGODB_URI || `mongodb+srv://ironhack:ironhack@cluster0-uqv35.mongodb.net/Marvel`;
//mongodb+srv://ironhack:<password>@cluster0-uqv35.mongodb.net/test?retryWrites=true

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });