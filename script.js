const operate = function(num1, operator, num2) {

    let output;

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
        default:
            output = num2;
    };

    return output;

};

const stringedOperate = function(stringedNum1, stringedOperator, stringedNum2) {

    switch (stringedOperator) {
        case '+':
            newNum1 = stringedNum1 + stringedNum2;
            break;
        case '−':
            newNum1 = stringedNum1 - stringedNum2;
            break;
        case '×':
            newNum1 = stringedNum1 * stringedNum2;
            break;
        case '÷':
            newNum1 = stringedNum1 / stringedNum2;
            break;
        default:
            newNum1 = stringedNum2;
    };

    return newNum1;
    

};

const numbers = document.querySelectorAll(".number");

const displayValue = [];

const globalScopeVar = {}; // global-scoped variable to hold num1, operator, and num2. my question is, though, should i not be holding these values in both this object AND the array displayValue? is that redundant?

numbers.forEach((item) => {
    item.addEventListener('click', (Event) => {
        displayValue.push(Event.target.textContent);
        let finalDisplay = displayValue.join('');
        displayText.textContent = finalDisplay;
})});


const operators = document.querySelectorAll(".operator");

operators.forEach((item) => {
    item.addEventListener('click', (Event) => {
    
        let num1 = displayText.textContent;

        displayValue.push(Event.target.textContent); 
        displayText.textContent = displayValue.join('');
        globalScopeVar.firstNumber = Number(num1);
    
        let operator = Event.target.textContent;
        globalScopeVar.operatorChoice = operator;

        console.log(" this is num1 " + num1);
        // console.log(" this is operator " + operator);

        if (num1.indexOf(operator) > -1) {
            let stringedNum1 = Number(num1.substring(0, num1.indexOf(operator)));
            globalScopeVar.firstStringedNumber = stringedNum1;
            console.log('this is stringed1 ' + stringedNum1);
            console.log(globalScopeVar.firstStringedNumber);
            let regex = /[+|−|×|÷]/; //only working with + currently
            let stringedOperator = num1.match(regex)[0];
            console.log(num1.match(regex)[0] + " this is regex match");
            globalScopeVar.stringedOperatorChoice = stringedOperator;
            console.log('this is stringedOperator ' + stringedOperator);
            let stringedNum2 = Number(num1.split(regex)[1]); // this is only taking the last digit, not the entire number after the regex
            globalScopeVar.secondStringedNumber = stringedNum2;
            console.log('this is stringed2 ' + stringedNum2);
            console.log(stringedOperate(stringedNum1, stringedOperator, stringedNum2));
        };
        
        // when an operator is clicked, check whether i've already clicked an operator before

    });

});


const equals = document.getElementById("equals");

equals.addEventListener('click', (Event) => {
    
    if (globalScopeVar.firstStringedNumber) { 
        let num1 = newNum1;
        let operator = globalScopeVar.operatorChoice;
        let num2 = Number(displayText.textContent.charAt(displayText.textContent.length - 1));
        operate(num1, operator, num2);
        console.log(operate(num1, operator, num2) + " (operate function)");

        displayText.textContent = Math.round(100 * operate(num1, operator, num2))/100;
    
        if (operator === '÷' && num2 === 0) {
            displayText.textContent = "undefined";
        };
    } else {
        let num1 = Number(globalScopeVar.firstNumber);
        console.log(num1);
        let operator = globalScopeVar.operatorChoice;
        let operatorPlace = displayValue.indexOf(operator);
        let num2 = Number(displayValue.slice(operatorPlace + 1).join(''));
        globalScopeVar.secondNumber = num2;
        operate(num1, operator, num2);
        console.log(operate(num1, operator, num2) + " (operate function)");

        displayText.textContent = Math.round(100 * operate(num1, operator, num2))/100;
    
        if (operator === '÷' && num2 === 0) {
            displayText.textContent = "undefined";
        };
    };
    

});

const clear = document.getElementById("clear");

clear.addEventListener('click', (Event) => {
    displayValue.length = 0;
    displayText.textContent = "0";
});

console.log(globalScopeVar);


// i need to make sure AC is completely clearing all data, because I noticed weird things are happening when i have solved multiple equations on the calculator