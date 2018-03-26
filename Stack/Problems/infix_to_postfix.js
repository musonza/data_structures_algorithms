const Stack = require('../stack');

function infixToPostFix(infixExpr) {
    const precedence = {
        "*": 3,
        "/": 3,
        "+": 2,
        "-": 2,
        "(": 1
    };
    let opStack = new Stack();
    let postFixList = [];
    let tokenList = infixExpr.split(' ');
    let index = 0;
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';

    while (index < tokenList.length) {
        let token = tokenList[index];

        if (alpha.includes(token) || nums.includes(token)) {
            postFixList.push(token);
        } else if (token == '(') {
            opStack.push(token);
        } else if (token == ')') {
            let topToken = opStack.pop();
            while (topToken != '(') {
                postFixList.push(topToken);
                topToken = opStack.pop();
            }
        } else {
            while (!opStack.isEmpty() && precedence[opStack.peek()] >= precedence[token]) {
                postFixList.push(opStack.pop());
            }
            opStack.push(token);
        }
        index++;
    }

    while (!opStack.isEmpty()) {
        postFixList.push(opStack.pop());
    }

    return postFixList.join(" ");
}

console.log(infixToPostFix("A * B + C * D")); // A B * C D * +
console.log(infixToPostFix("( A + B ) * C - ( D - E ) * ( F + G )")); // A B + C * D E - F G + * -