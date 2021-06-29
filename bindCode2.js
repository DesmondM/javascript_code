

var age =10;

var person ={

    age: 100,
    getAge:function (){
        return this.age;
    }
};

var Desmond = person.getAge;
var myFunc = Desmond.bind(person);
console.log(Desmond);
console.log(myFunc);