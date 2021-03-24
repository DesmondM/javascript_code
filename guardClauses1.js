
function canDrink(person){
    if(person?.age!=null){
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


function canDrinkBetter(person){
    if(person?.age==null){
        console.log("You are not a person")
        return
    }

    const result=canDrinkResponse(person.age)
    console.log(result)
}

function canDrinkResponse(age){
    if(age<18) return "Fxn 2: No you cannot drink"
    if (age<21) return "Fxn 2:You cannot drink in the US"
    return "Fxn 2:Yes"
}

const r ={
    age: 45
}
canDrinkBetter(r)