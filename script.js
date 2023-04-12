const operate = function(num1, operator, num2) {

    let output = 0;

    switch (operator) {
        case '+':
            output = num1 + num2;
            break;
        case '−':
            output = num1 - num2;
            break;
        case '×':
            output = num1 * num2;
            break;
        case '÷':
            output = num1 / num2;
            break;
    };

    return output;

};

const numbers = document.querySelectorAll(".number");

const displayValue = [];

const globalScopeVar = {}; // global-scoped variable to hold num1 and operator

numbers.forEach((item) => {
    item.addEventListener('click', (Event) => {
        displayValue.push(Event.target.textContent);
        let finalDisplay = displayValue.join('');
        displayText.textContent = finalDisplay;
})});


const operators = document.querySelectorAll(".operator");

const displayText = document.getElementById("displayText");

operators.forEach((item) => {
    item.addEventListener('click', (Event) => {

    let num1 = displayText.textContent;

    displayValue.push(Event.target.textContent); 
    displayText.textContent = displayValue.join('');
    globalScopeVar.firstNumber = num1;
    // if operator is pressed more than once, ignore 

    let operator = Event.target.textContent;
    globalScopeVar.operatorChoice = operator;
    
    });
});

const equals = document.getElementById("equals");

equals.addEventListener('click', (Event) => {
    let num1 = Number(globalScopeVar.firstNumber);
    let operator = globalScopeVar.operatorChoice;

    let operatorPlace = displayValue.indexOf(operator);
    let num2 = Number(displayValue.slice(operatorPlace + 1).join(''));
    
    console.log(num1 + " (num1)");
    console.log(operator + " (operator)");
    console.log(num2 + " (num2)");
    console.log(displayValue);
    operate(num1, operator, num2);
    console.log(operate(num1, operator, num2) + " (operate function)");
    displayText.textContent = operate(num1, operator, num2);
});

const clear = document.getElementById("clear");

clear.addEventListener('click', (Event) => {
    displayValue.length = 0;
    let globalScopeVar = {};
    displayText.textContent = "0";
});

// how to string together multiple operators
// round decimals down to nearest hundredth 
// if 0 is entered after "/", display "Infinity" as answer