const add = (firstNumberToAdd, secondNumberToAdd) => {
    return firstNumberToAdd + secondNumberToAdd;
}

const subtract = (firstNumberToSubtract, secondNumberToSubtract) => {
    return firstNumberToSubtract - secondNumberToSubtract;
}

const multiply = (firstNumberToTimes, secondNumberToTimes) => {
    return firstNumberToTimes * secondNumberToTimes;
}

const divide = (firstNumberToDivide, secondNumberToDivide) => {
    return firstNumberToDivide / secondNumberToDivide;
}

const operate = (firstOperand, operator, secondOperand) => {
    if (operator == "+") {
        return add(firstOperand, secondOperand);
    } else if (operator == "-") {
        return subtract(firstOperand, secondOperand);
    } else if (operator == "*") {
        return multiply(firstOperand, secondOperand);
    } else if (operator == "/") {
        return divide(firstOperand, secondOperand);
    }
}

console.log(operate(2, "*", 10));