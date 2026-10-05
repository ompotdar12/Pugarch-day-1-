class Stack {
  constructor() { this.items = []; }
  push(value) { this.items.push(value); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
}
const stack = new Stack();
stack.push(10); stack.push(20);
console.log(stack.pop(), stack.peek()); // 20 10
