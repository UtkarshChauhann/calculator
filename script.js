let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculation = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === 'C') {
            calculation = '';
            result = '';
            display.value = '';
        } else if (value === '<') {
            calculation = calculation.slice(0, -1);
            display.value = calculation;
        } else if (value === '=') {
            try {
                result = eval(calculation);
                display .value = result;
                calculation = result.toString();
            } catch (error) {
                display.value = 'Error';
                calculation = '';
            }
        } else {
            calculation += value;
            display.value = calculation;
        }
    });
});