const operators = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/"
};
let operand_One = null;
let operand_Two = null;
let sign = null;
let user_Input = "";
let result = "";
let display_Output = document.querySelector('.calOutput');

function clearDisplay(){
    operand_One = "";
    operand_Two = "";
    sign = "";
    user_Input = "";
    result = "";
    display_Output.textContent = "";
  }