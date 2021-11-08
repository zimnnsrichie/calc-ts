console.log('Calc-ts started...');

import { question } from "readline-sync";

type operators = '+' | '-' | '%' | '*';
let operatorList = ['+', '-', '/', '*'];

function isNumber(str: string): boolean{
    // Convert to a number
    const mayBeANumber = parseInt(str);

    // Check if NaN (Not a Number)
    const isNumber: boolean = !isNaN(mayBeANumber);

    return isNumber;
}

function isOperator(opr: string): boolean{
    return opr === '+' || opr === '-' || opr === '/' || opr === '*'

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

function calculate(firstNumber: number, operator: operators, secondNumber: number): number{
    return eval(`${firstNumber}${operator}${secondNumber}`);
}

function main(): void {
    // to identify the type (in this case the output is function)
    // so that we know we have imported correctly
    // console.log(question);

    const firstOperand: string = question('Enter the first operand: ');
    const operator: string = question('Enter the operator: ');
    const secondOperand: string = question('Enter the second operand: ');
    console.log(firstOperand, operator, secondOperand);

    const isValidInput: boolean = isNumber(firstOperand) && isOperator(operator) && isNumber(secondOperand);
    

    if(isValidInput){
        console.log('Inputs are valid..');
        const firstValue = parseInt(firstOperand);
        const secondValue = parseInt(secondOperand);
        console.log('Result is:', calculate(firstValue, operator as operators, secondValue));
    }
    else{
        console.log('Inputs are not valid... Re-enter');
        main();
    }
    
}

main();
