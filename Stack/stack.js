/**
 * Stack implementation using array
 */
class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}

module.exports = Stack;

// let stack = new Stack();
// console.assert(stack.isEmpty());

// stack.push("Jane Doe");
// console.assert(stack.peek() === 'Jane Doe');
// console.assert(stack.isEmpty() === false);

// stack.push("Software Engineer");
// console.assert(stack.peek() === 'Software Engineer');
// console.assert(stack.size() == 2);

// stack.pop();
// console.assert(stack.size() == 1);
// console.assert(stack.peek() === 'Jane Doe');
