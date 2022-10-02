/* Math Functions */

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
};

/* Event Listeners */

const numbers = document.querySelectorAll("[date-number]");
const display = document.querySelector(".display");
const operators = document.querySelectorAll("[data-operation]")
const equals = document.getElementById("equal");


//operators.forEach(operator => {
   // operator.addEventListener("click", (e) => {
    //    display.textContent = operator.innerText;
  //  })
//});
let firstValue = 0;
let secondValue = 0;
let opValue = 0;
let userIsStillTyping = false;


  
    numbers.forEach(button => {
    button.addEventListener("click", (e) => {
        if (userIsStillTyping == false) {
            firstValue = e.target.innerText;
            console.log(firstValue);
            display.textContent = button.innerText;
            userIsStillTyping = true;
        } else  if (userIsStillTyping == true) {
            firstValue += e.target.innerText;
            display.textContent += button.innerText;
        }
        
        
    })
});






operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        userIsStillTyping = false;
        opValue = e.target.innerText;
        secondValue = firstValue;
        console.log(opValue);

    })
});

equals.addEventListener("click", (e) => {
    userIsStillTyping = false;
    display.textContent = operate(parseInt(firstValue), opValue, parseInt(secondValue));
});
