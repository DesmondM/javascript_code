function doThing(other){
    let name = "Desmond";
    other(name);
}

function hello(nm){
    console.log('Hello ' +nm);
}

doThing(hello);