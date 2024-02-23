const operators = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/"
};
let operand_One = "";
let operand_Two = ""
let sign = "";

const operator = document.querySelectorAll('.sign').forEach(function (selectedOperator) {
    selectedOperator.addEventListener('click', () => {
        const selected = event.target.textContent;
        //checks if math symbol selected using the ternary operations
        sign =
            operators.add === selected ? "+" :
            operators.subtract === selected ? "-" :
            operators.multiply === selected ? "*" :
            operators.divide === selected ? "/" :
            "";
    })
});

function add(a, b) {
    return a + b;
}
/* 
console.log(add(num1, num2))

function subtract(a, b){
    return a - b;
}
console.log(subtract(num1, num2))

function multiply(a, b){
    return a * b;
}
console.log(multiply(num1, num2))
 
function divide(a, b){
    return a / b;
}
 
console.log(divide(num1, num2)); */

function operate() {
    convertInput()
        if (sign === "+") {
            console.log(add(operand_One, 12));
        }
        console.log(sign)
}

/* A function collect inputs */
let user_Input = "";

const operand = document.querySelectorAll('.btn').forEach(function (digit) {
    const display_Inputs = document.querySelector('.userInput')
    digit.addEventListener('click', () => {
        digit.textContent != "DEL" && digit.textContent != "AC" && digit.textContent != "=" ? user_Input += event.target.textContent: undefined; //store the num(s) click before an operator
        display_Inputs.textContent = user_Input;// display value on screen 
    })
});
/* sign === "" ? console.log("Hey") : console.log("Keep on"); */


function convertInput(){
    if(user_Input[user_Input.length -1] === "+"){
        sliceInput = user_Input.slice(0,-1);// remove the last character
        console.log(sliceInput)
        operand_One === "" ? operand_One = parseInt(sliceInput): operand_Two = parseInt(user_Input)
        console.log(typeof(operand_One))
    }
}

