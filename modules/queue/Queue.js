class _NodeQ {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new _NodeQ(value);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.length++;
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    this.length--;
    return node.value;
  }

  show() {
    return this.first.value;
  }

  all() {
    const arr = [];
    let temp = this.first;
    while (temp !== null) {
      arr.push(temp.value);
      temp = temp.next;
    }
    return arr;
  }
}

module.exports = Queue;
