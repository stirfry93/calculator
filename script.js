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

const buttons = document.querySelectorAll("#buttons");

const displayValue = [];

buttons.forEach((item) => {
    item.addEventListener('click', (Event) => {
        displayValue.push(Event.target.textContent);
        let finalDisplay = displayValue.join('');
        displayText.textContent = finalDisplay;
})});

