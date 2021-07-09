
var john = {
    name: "John",
    amount: 1500,
    calc(deduct){
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                this.balance = this.amount -deduct;
                resclear
                ( `The salary for ${this.name.toUpperCase()} is ${this.balance}`);
            }, 2000);
        })
        
    }
}

//console.log(john.calc(400));

john.calc(200).then(nyora=>console.log(nyora));