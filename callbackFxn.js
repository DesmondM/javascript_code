function hello(name, callBack){
    console.log("Hello "+ name);
    callBack();
}

//the callback function
function calledFxn(){
    console.log('This is the callback function example ');
}
hello('Desmond ', calledFxn);