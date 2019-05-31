const express = require('express');
const mongoose = require('mongoose');
const Comic = require('../models/Comic')
const router = express.Router();
const axios = require('axios');
const characters = require('../character.json')


router.get('/randomCharacters', (req, res, next) => {
  axios.get(`https://comicvine.gamespot.com/api/publisher/4010-31/?api_key=${process.env.apiKey}&format=json`)
  .then(infoFromAPI => {
    console.log("the info for random characters ========================== ", infoFromAPI);
    res.status(200).json(infoFromAPI)
  })
  .catch(err => console.log("error getting characters from api ----- ", err))
})

// Below is what returns random character on application ---------

router.get("/getRandom", (req, res, next) => {
  console.log("-------------------- getting list of characters -------------------- ", characters)
  
  Comic.find()
  .then((blah) => {
    var randomCharArray = []
    for(let i = 0; i < characters.length; i++) {
      var random = Math.floor(Math.random() * characters.length)
      if(random % 3 === 0) {
        if(randomCharArray.includes(characters[random])) {
          continue;
        } else {
          randomCharArray.push(characters[random])
        }
      } 

      if(randomCharArray.length >= 4) {
        break;
      } else {
        continue;
      }
    }
    // console.log(blah);
    res.json(randomCharArray)
  }).catch(err => res.json(err))
})


router.post('/addCard', (req, res, next) => {
  console.log("the req body ----------- ", req.body)
  req.user.cards.push(req.body)
  req.user.save()
  .then(updatedUser => {
    res.json(updatedUser);
  }).catch(err => res.json(err))
})


module.exports = router;