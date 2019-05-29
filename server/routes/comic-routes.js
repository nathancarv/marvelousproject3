const express = require('express');
const mongoose = require('mongoose');
const Comic = require('../models/Comic')
const router = express.Router();
const axios = require('axios');


router.get('/randomCharacters', (req, res, next) => {
  axios.get(`https://comicvine.gamespot.com/api/publisher/4010-31/?api_key=${process.env.apiKey}&format=json`)
  .then(infoFromAPI => {
    console.log("the info for random characters ========================== ", infoFromAPI);
    res.status(200).json(infoFromAPI)
  })
  .catch(err => console.log("error getting characters from api ----- ", err))
})




module.exports = router;