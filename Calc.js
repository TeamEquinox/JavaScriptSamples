const operator = prompt("Enter an operator such as: +, -, *, or /.")
const number1 = parseFloat(prompt('Enter First Number'))
const number2 = parseFloat(prompt('Enter Second Number'))
    
if (operator == '+') {
    result = number1 + number2
        }
            else if (operator == '-') {
               result = number1 - number2;
        }
            else if (operator == '*') {
                result = number1 * number2;
        }
            else if(operator == '/') {
                    result = number1 / number2;
        }
                
            
     console.log(`${number1} ${operator} ${number2} = ${result}`);
            
            