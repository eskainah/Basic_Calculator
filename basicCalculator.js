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

function getInput(){
    const display_Inputs = document.querySelector('.userInput'); 
    const operand = document.querySelectorAll('.btn').forEach(function (digit) {
      digit.addEventListener('click', () => { 
          //store the num(s) click before an operator
        if(digit.textContent != "DEL" && digit.textContent != "AC" && digit.textContent != "="){
          
          if (user_Input === "") {
            if (event.target.textContent === "/" || event.target.textContent === "*" || /* event.target.textContent === "-" ||  */event.target.textContent === "+" || event.target.textContent === "=") {
              user_Input = ""
            } 
            else{
              user_Input +=event.target.textContent;
            }
            //accept decimals as first input
            if(event.target.textContent === "."){
              user_Input = 0 + event.target.textContent;
            }
          }
          else{
            if (result != "") {
              user_Input = result + event.target.textContent;
              result=""
              operand_One=""
              operand_Two=""
              sign=""
            }
            else{
              //allow decimals point after an operation 
              if(event.target.textContent === "."){
                user_Input += 0 + event.target.textContent;
              }
              else{
                user_Input +=event.target.textContent;
              }
            }
          }
        }
      display_Inputs.textContent = user_Input; // display value on screen   
      })
    });  
}