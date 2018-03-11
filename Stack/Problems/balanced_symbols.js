const Stack = require('../stack');

const openingSymbols = '{([';
const closingSymbols = '})]';

function isBalanced(str) {
    let s = Stack();
    let balanced = true;
    let index = 0;

    while (index < str.len && balanced) {
        symbol = str[index];
        if (openingSymbols.indexOf(symbol) > -1) {
            s.push(symbol);
        }
    }
}