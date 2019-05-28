const express = require('express');
const mongoose = require('mongoose');
const Character = require('../models/Character')
const router = express.Router();




router.get('/character', (req, res, next) => {
  Character.find()
    .then(allTheCharacters => {
      res.json(allTheCharacters);  // ask what should replace res.json, since im using an api
    })
    .catch(err => {
      res.json(err);
    })
});

router.get('/character/:id',(req, res, next) => {
  Character.findById(req.params.id)
    .then(singleCharacter => {
      res.json(singleCharacter);  // ask what should replace res.json, since im using an api
    })
    .catch(err => {
      res.json(err);
    })
});






// // Route to get all countries
// router.get('/', (req, res, next) => {
//   Country.find()
//     .then(countries => {
//       res.json(countries);
//     })
//     .catch(err => next(err))
// });

// // Route to add a country
// router.post('/', (req, res, next) => {
//   let { name, capitals, area, description } = req.body
//   Country.create({ name, capitals, area, description })
//     .then(country => {
//       res.json({
//         success: true,
//         country
//       });
//     })
//     .catch(err => next(err))
// });

module.exports = router;
