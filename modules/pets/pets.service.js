const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

function refill(type) {
  store[type].forEach(el => pets[type].enqueue(el));
  return {message: 'Samples refilled, refresh'};
}

module.exports = {
  get() {
    if (pets.dogs.length === 0) { 
      refill('dogs');
    }
    if (pets.cats.length === 0) {
      refill('cats');
    }

    const petObj = {
      dog: pets.dogs.show(),
      cat: pets.cats.show(),
    };

    // Return the pets next in line to be adopted.
    // queue.show()
    return petObj;
  },

  dequeue(type) {
    if (pets[type].length > 0) {
      return pets[type].dequeue();
    } else {
      return refill(type);
    }
  }
}
