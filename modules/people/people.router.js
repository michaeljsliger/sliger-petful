const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  const people = People.get();

  if (people.length === 0) {
    return res.status(400).json({message: 'No one in queue'});
  }

  res.status(200).json(people);
})

router.post('/', json, (req, res) => {
  const { person } = req.body;

  People.enqueue(person);

  res.send(People.get());
})



module.exports = router
