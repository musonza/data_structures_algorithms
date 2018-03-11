const Stack = require('../stack');

/**
 * Divide the number by 2 while it's greater than zero and push the remainder to a stack.
 * Pop the stack until it's empty, each time appending the popped int to a string
 * @param integer decimalNum to convert to binary
 * @returns string binString the binary number representation
 */
function decimalToBinary(decimalNum) {
    let remainderStack = new Stack();
    while (decimalNum > 0) {
        remainderStack.push(decimalNum % 2);
        decimalNum = Math.floor(decimalNum / 2);
    }

    let binString = ""
    while (!remainderStack.isEmpty()) {
        binString = binString + remainderStack.pop();
    }

    return binString;
}

console.assert(decimalToBinary(233) == '11101001');
console.assert(decimalToBinary(20) == '10100');