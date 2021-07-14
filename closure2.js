const helloCreator = (name) =>{
    var greeting = 'Hello';

    const helloFunction =() =>{
        console.log(greeting + '' + name);
    }
    return helloFunction;
}

var helloJohn = helloCreator(' Desmond');
var helloTessie =helloCreator(' Tessie');

helloJohn();
helloTessie();