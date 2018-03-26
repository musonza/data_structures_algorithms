const Stack = require('../stack');

const precedence = {
    "*": 3,
    "/": 3,
    "+": 2,
    "-": 2,
    "(": 1
};
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

function infixToPostFix(infixExpr) {
    let opStack = new Stack();
    let postFixList = [];
    let tokenList = infixExpr.split(' ');
    let index = 0;

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

function postFixEval(postFixExpr) {
    let operandStack = new Stack();
    const tokenList = postFixExpr.split(' ');
    let index = 0;

    while (index < tokenList.length) {
        let token = tokenList[index];
        if (nums.includes(token)) {
            operandStack.push(parseInt(token));
        } else {
            let operand2 = operandStack.pop();
            let operand1 = operandStack.pop();
            let result = doMath(token, operand1, operand2);
            operandStack.push(result);
        }

        index++;
    }

    return operandStack.pop();
}

function doMath(op, op1, op2) {
    if (op == '*') {
        return op1 * op2;
    } else if (op == '/') {
        return op1 / op2;
    } else if (op == '+') {
        return op1 + op2;
    } else {
        return op1 - op2;
    }
}

console.log(infixToPostFix("A * B + C * D")); // A B * C D * +
console.log(infixToPostFix("( A + B ) * C - ( D - E ) * ( F + G )")); // A B + C * D E - F G + * -
console.log(postFixEval('7 8 + 3 2 + /')); // 3

let infix = "( 2 + 2 ) * 4 + 2";
let post_fix = infixToPostFix(infix); // 2 2 + 4 * 2 +
console.log(postFixEval(post_fix)); // 18