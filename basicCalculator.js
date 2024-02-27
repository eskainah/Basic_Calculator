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
      operate()
      });
});