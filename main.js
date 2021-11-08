"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Calc-ts started...');
var readline_sync_1 = require("readline-sync");
var operatorList = ['+', '-', '/', '*'];
function isNumber(str) {
    // Convert to a number
    var mayBeANumber = parseInt(str);
    // Check if NaN (Not a Number)
    var isNumber = !isNaN(mayBeANumber);
    return isNumber;
}
function isOperator(opr) {
    return opr === '+' || opr === '-' || opr === '/' || opr === '*';
    // switch(opr){
    //     case '+':
    //     case '-':
    //     case '/':
    //     case '*':
    //         return true;
    //     return false;
    // }
    // if (operatorList.includes(opr)){
    //     return true;
    // }
    return false;
}
function calculate(firstNumber, operator, secondNumber) {
    return eval("" + firstNumber + operator + secondNumber);
}
function main() {
    // to identify the type (in this case the output is function)
    // so that we know we have imported correctly
    // console.log(question);
    var firstOperand = (0, readline_sync_1.question)('Enter the first operand: ');
    var operator = (0, readline_sync_1.question)('Enter the operator: ');
    var secondOperand = (0, readline_sync_1.question)('Enter the second operand: ');
    console.log(firstOperand, operator, secondOperand);
    var isValidInput = isNumber(firstOperand) && isOperator(operator) && isNumber(secondOperand);
    if (isValidInput) {
        console.log('Inputs are valid..');
        var firstValue = parseInt(firstOperand);
        var secondValue = parseInt(secondOperand);
        console.log('Result is:', calculate(firstValue, operator, secondValue));
    }
    else {
        console.log('Inputs are not valid... Re-enter');
        main();
    }
}
main();
