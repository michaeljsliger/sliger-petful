const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const people = new Queue()
store.people.forEach(person => people.enqueue(person))

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    return people.all();
    // array of people
  },

  enqueue(person) {
    people.enqueue(person);
    return person;
  },

  dequeue() {
    // Remove a person from the queue.
    return people.dequeue();
  }
}
