const operators = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/"
};
let operand_One = "";
let operand_Two = "";
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

function operate() {
    collect()
        if (sign === "+") {
            console.log(add(operand_One, operand_Two));
        }
        console.log(sign)
}

/* A function collect inputs */
let user_Input = "";

const operand = document.querySelectorAll('.btn').forEach(function (digit) {
    const display_Inputs = document.querySelector('.userInput')
    digit.addEventListener('click', () => {
        if(digit.textContent != "DEL" && digit.textContent != "AC" && digit.textContent != "=" ){
                user_Input += event.target.textContent; 
        }
    
       //store the num(s) click before an operator
        display_Inputs.textContent = user_Input;// display value on screen 
    })
});

/* function convertInput(){
    let sliceInput
    if(user_Input[user_Input.length -1] === "+"){
        sliceInput = user_Input.slice(0,-1); //remove the last character
        console.log(sliceInput);
        operand_One === "" ? operand_One = parseInt(sliceInput): operand_Two = parseInt(sliceInput)
    }else{
            operand_Two = parseInt(user_Input)
    }
    console.log(typeof(operand_One), typeof(operand_Two))
} */

function collect(){
    const regex = /^(\d+)([+-])(\d+)$/;

    if (regex.test(user_Input)) {
        const inputArray = user_Input.match(regex)
        operand_One = parseInt(inputArray[1]);
        sign = inputArray[2];
        operand_Two = parseInt(inputArray[3]);
    }
        console.log(operand_One);
        console.log(sign);
        console.log(operand_Two);
        console.log(typeof(operand_One), typeof(operand_Two))
}