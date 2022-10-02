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
const clear = document.getElementById("clear");


let firstValue = null;
let secondValue = null;
let opValue = 0;
let userIsStillTyping = false;


 
/*Number Buttons */

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




/*Operators*/

operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if (firstValue != null && secondValue != null) {
            userIsStillTyping = false;
            display.textContent = operate(parseInt(secondValue), opValue, parseInt(firstValue));
            
            secondValue = parseInt(display.textContent);
            opValue = e.target.innerText
            
            
            
        } else {
            userIsStillTyping = false;
            opValue = e.target.innerText;
            secondValue = firstValue;
        }

        
    })
});


/*Equals Button*/
equals.addEventListener("click", (e) => {
    userIsStillTyping = false;
    display.textContent = operate(parseInt(secondValue), opValue, parseInt(firstValue));
});

/*Clear Button*/

clear.addEventListener("click", (e) => {
    display.textContent = "_";
    userIsStillTyping = false;
    firstValue = null;
    secondValue = null;
    opValue = 0;
    
});

