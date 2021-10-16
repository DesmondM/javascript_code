const person = {
    name: "Desmond",
    salary: 5000
}

const aboutMe = 'My name is ' + person.name + ' may salary is ' +person.salary+ ' rands'
console.log(aboutMe)

const aboutMe2 = `My name (using template literal) is ${person.name} and my salary is ${person.salary}`
console.log(aboutMe2)