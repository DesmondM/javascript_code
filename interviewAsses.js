
var john = {
    name: "John",
    amount: 1500,
    calc(deduct){
        this.balance = this.amount -deduct;
        return `The salary for ${this.name} is ${this.balance}`;
    }
}

console.log(john.calc(400));