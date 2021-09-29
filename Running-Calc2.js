
/*****************************************************************
Simple calculator that uses readline and calculates addition, subs
-traction, multiplication, and division.

@author Jhoseph Ruiz Fachin
@version Fall 2021
*****************************************************************/

// Imports the readline module
const readline = require("readline");

// Assigns caclInterface as our readline variable name
const calcInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Prints welcome and some useful data to the user at the start of the code
console.log('Welcome to Running-Calc.js\n')
let total = 0.0
console.log('Current total:' + total.toFixed(1) + '\n')

// Calls askForOperator
askForOperator();

/*****************************************************************
Function askForOperator that ask the user for the +,-,*,/ operators
along with 'q', and calls calculateLogic function
*****************************************************************/
function askForOperator() {
    calcInterface.question('Enter operation (+-*/, q to quit): ', userInput => { 
        calculateLogic(userInput); 
    });
}


/*****************************************************************
Function calculateLogic that ask to enter a valid value, and 
calculates the desired operations
*****************************************************************/
function calculateLogic(userInput) {
    
    //Calculates addition
    if(userInput === "+") {
        calcInterface.question("Enter value: ", (value) => {
            if (isNaN(value) === false) {
                const numb = Number(value);
                total += numb;
                console.log('\nCurrent total:' + total.toFixed(1) + '\n')
                askForOperator();
            } else {
                calcInterface.setPrompt(`Invalid number provided. Enter a value: `);
                calcInterface.prompt();
                calcInterface.on('line', (newUserInput) => {
                    if (isNaN(newUserInput) === false) {
                        const numb = Number(newUserInput);
                        total += numb;
                        console.log('\nCurrent total:' + total.toFixed(1) + '\n')
                        askForOperator();
                    } else {
                        calcInterface.setPrompt(`Invalid number provided. Enter a value: `);
                        calcInterface.prompt();
                    }
                })
            }
        });
    
    
    }

    //Calculates substraction
     else if(userInput === "-") {
        calcInterface.question("Enter value: ", (value) => {
            if (isNaN(value) === false) {
                const numb = Number(value);
                total -= numb;
                console.log('\nCurrent total:' + total.toFixed(1) + '\n')
                askForOperator();
            } else {
                calcInterface.setPrompt(`Invalid number provided. Enter a value: `);
                calcInterface.prompt();
                calcInterface.on('line', (newUserInput) => {
                    if (isNaN(newUserInput) === false) {
                        const numb = Number(newUserInput);
                        total -= numb;
                        console.log('\nCurrent total:' + total.toFixed(1) + '\n')
                        askForOperator();
                    } else {
                        calcInterface.setPrompt(`Invalid number provided. Enter a value: `);
                        calcInterface.prompt();
                    }
                })
            }
        });
    } 

    //Calculates multiplication
    else if(userInput === "*") {
        calcInterface.question("Enter value: ", (value) => {
            if (isNaN(value) === false) {
                const numb = Number(value);
                total *= numb;
                console.log('\nCurrent total:' + total.toFixed(1) + '\n')
                askForOperator();
            } else {
                calcInterface.setPrompt(`Invalid number provided. Enter a value: `);
                calcInterface.prompt();
                calcInterface.on('line', (newUserInput) => {
                    if (isNaN(newUserInput) === false) {
                        const numb = Number(newUserInput);
                        total *= numb;
                        console.log('\nCurrent total:' + total.toFixed(1) + '\n')
                        askForOperator();
                    } else {
                        calcInterface.setPrompt(`Invalid number provided. Enter a value: `);
                        calcInterface.prompt();
                    }
                })
            }
        });
    } 
    
    //Calculates division
    else if(userInput === "/") {
        calcInterface.question("Enter value: ", (value) => {
            if (isNaN(value) === false && value !== 0) {
                const numb = Number(value);
                total /= numb;
                console.log('\nCurrent total:' + total.toFixed(1) + '\n')
                askForOperator();
            } else {
                calcInterface.setPrompt(`Invalid number or Zero was provided. Enter a value: `);
                calcInterface.prompt();
                calcInterface.on('line', (newUserInput) => {
                    if (isNaN(newUserInput) === false) {
                        const numb = Number(newUserInput);
                        total /= numb;
                        console.log('\nCurrent total:' + total.toFixed(1) + '\n')
                        askForOperator();
                    } else {
                        calcInterface.setPrompt(`Invalid number or Zero was provided. Enter a value: `);
                        calcInterface.prompt();
                    }
                })
            }
        });
    } 
    
    // Quits the application if entered value is 'q'
    else if (userInput === "q") {
        console.log("Final value: " + total.toFixed(1));
        calcInterface.close();
    } 
    
    // Checks for invalid operators
    else {
        console.log("Invalid operation. Please try again.\n")
        askForOperator()
    }
}