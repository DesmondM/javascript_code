console.log(doSomething); // prints the function code in its entirety
doSomething();     // prints "Function declaration"

function doSomething(){
    console.log("Function declaration");
}

console.log(expression);   // prints undefined
expression();       //Uncaught TypeError: "expression" not a function

var expression = function(){
    console.log("Function expression");
}