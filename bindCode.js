//losing this

let user ={
    firstName: "John",
    sayHi(){
        console.log(`Hello, ${this.firstname}!`);
    }
};
setTimeout(user.sayHi, 1000); // Hello, undefined

//Solution using bind

let user2 ={
    firstName: "John the second"
};

function func(){
    console.log(`Hello, ${this.firstName}!`)
}

let funcUser = func.bind(user2);
funcUser();


