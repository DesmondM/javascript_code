
function canDrink(person){
    if(person?.age==null){
        if(person.age<18){
            console.log("Noy you cannot")
        } else if (person.age<21){
            console.log("You cannot drink in the US")
        } else{
            console.log("Yes you can drink")
        }
    } else{
        console.log("You are not a person")
    }
}

const p ={
    age:22
}

const c ={
    age:16
}

canDrink(p)
canDrink(c)