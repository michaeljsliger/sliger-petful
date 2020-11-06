const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router();

router.get('/', (req, res) => {
  // on page load and thereafter
  const petsObj = Pets.get();
  res.status(200).json(petsObj);
})

router.delete('/', json, (req, res) => {
  // on adopt button click
  const { type } = req.body;

  Pets.dequeue(type);
  People.dequeue();
  // top queued person adopts pet

  // return pet to add to adopted list
  res.status(200).json(Pets.get());
})

module.exports = router
