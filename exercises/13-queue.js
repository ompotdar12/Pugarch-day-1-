class Queue {
  constructor() { this.items = []; this.frontIndex = 0; }
  enqueue(value) { this.items.push(value); }
  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.items[this.frontIndex++];
  }
  peek() { return this.items[this.frontIndex]; }
  isEmpty() { return this.frontIndex >= this.items.length; }
  size() { return this.items.length - this.frontIndex; }
}
const queue = new Queue();
queue.enqueue("A"); queue.enqueue("B");
console.log(queue.dequeue(), queue.peek()); // A B
