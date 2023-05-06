const screen = document.getElementById('input');
const numberButtons = document.querySelectorAll('.btn');
const allDeleteButton = document.getElementById('delete-btn');
const allClearButton = document.getElementById('all-clear-btn');
const addButton = document.getElementById('add-btn');
const subtractButton = document.getElementById('subtract-btn');
const multiplyButton = document.getElementById('multiply-btn');
const divideButton = document.getElementById('divide-btn');
const equalsButton = document.getElementById('equal-btn');

console.log(divideButton);


numberButtons.forEach(function(button){
    button.addEventListener('click', function(e){
        screen.value += e.target.value;
    });
    console.log(screen.value);
    });

allDeleteButton.addEventListener('click', function(e){
    screen.value =screen.value.slice(0, -1);
    });

allClearButton.addEventListener('click', function(e){
    screen.value = '';
});
equalsButton.addEventListener('click', function(e){
    function calculation() {
        let displayContent = screen.value;
        let numbers = displayContent.split(/\+|\-|\*|\//g);
        let operators = displayContent.replace(/[0-9]|\./g, "").split("");
        let result = Number(numbers[0]);
        
        for (let i = 0; i < operators.length; i++) {
        let num = Number(numbers[i+1]);
        switch (operators[i]) {
            case "+":
            result += num;
            break;
            case "-":
            result -= num;
            break;
            case "*":
              result *= num;
            break;
            case "/":
            result /= num;
            break;
            default:
            break;
        }
        }
        
        input.value = result;
    }
    return calculation();
});






























// equalsButton.addEventListener('click', function(e){
//     let screenInput = screen.value;
//     function calculate(a,b, numberButtons) { 
//         if (numberButtons === '+') { 
//         return add(a+b); 
//         } else if (numberButtons === '-') { 
//         return subtract(screenInput); 
//         } else if (numberButtons === '*') { 
//         return multiply(screenInput); 
//         } else if (numberButtons === '/') { 
//         return divide(screenInput); 
//         } 
//     } const result = calculate; 
//     console.log(result);
// });



// screen.value = eval(screen.value + values);



















// function calculate(, numberButtons) { 
//     if (numberButtons === '+') { 
//     return add(screenInput); 
//     } else if (numberButtons === '-') { 
//     return subtract(screenInput); 
//     } else if (numberButtons === '*') { 
//     return multiply(screenInput); 
//     } else if (numberButtons === '/') { 
//     return divide(screenInput); 
//     } 
// } const result = calculate(screen.value, numberButtons); 
// console.log(result);






