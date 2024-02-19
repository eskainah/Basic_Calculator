    const num1 = 12;
    const num2 = 7;
    const operators = {
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/"
    };

const operator =  document.querySelectorAll('.sign').forEach(function(selectedOperator){
                selectedOperator.addEventListener('click', ()=>{
                    const selected = event.target.textContent;
                    console.log(selected);
        })
    });

    function add(a, b){
        return a + b;
    }
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
    
    console.log(divide(num1, num2));