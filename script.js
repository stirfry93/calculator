const operate = function(operator, num1, num2) {

    let output = 0;

    switch (operator) {
        case '+':
            output = num1 + num2;
            break;
        case '-':
            output = num1 - num2;
            break;
        case '*':
            output = num1 * num2;
            break;
        case '/':
            output = num1 / num2;
            break;
    };

    return output;

};

console.log(operate('+', 30, 6));