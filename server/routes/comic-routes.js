const express = require('express');
const mongoose = require('mongoose');
const Comic = require('../models/Comic')
const router = express.Router();
const axios = require('axios');




router.get('/comic', (req, res, next) => {
  Comic.find()
    .then(allTheComics => {
      res.json(allTheComics);  // ask what should replace res.json, since im using an api
    })
    .catch(err => {
      res.json(err);
    })
});

router.get('/comic/:id', (req, res, next) =>{
  Comic.findById(req.params.id)
  .then(singleComic => {
    res.json(singleComic);  // ask what should replace res.json, since im using an api
  })
  .catch(err => {
    res.json(err);
  })
})



// the new routes for the new api




router.get('/charaters', (req, res, next) => {
  axios.get(`https://comicvine.gamespot.com/api/characters/?api_key=${process.env.apiKey}&format=json`)
  .then(infoFromAPI => {
    res.status(200).json(infoFromAPI)
  })
  .catch(err => console.log("error getting characters from api ----- ", err))
})




module.exports = router;