const Stack = require('../stack');

function isBalanced(str) {
    let stack = new Stack();
    let balanced = true;
    let index = 0;

    while(index < str.length && balanced) {
        let symbol = str[index];
        if (symbol == "(") {
            stack.push(symbol);
        } else {
            if (stack.isEmpty()){
                balanced == false;
            } else{
                stack.pop();
            }
        }

        index++;
    }

    return balanced && stack.isEmpty();
}

console.log(isBalanced('((()))')) // true
console.log(isBalanced('(()'))   // false
