const helloCreator = (name) =>{
    var greeting = 'Hello';

    const helloFunction =() =>{
        console.log(greeting + '' + name);
    }
    return helloFunction;
}

var helloDesmond = helloCreator(' Desmond');
var helloTessie =helloCreator(' Tessie');
var greetPrimo = helloCreator('Primo');

helloDesmond();
helloTessie();
greetPrimo();
