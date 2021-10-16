const fetch = require("node-fetch");
const promiseObject = fetch('/data.json')

promiseObject.then(response=>{
    const promiseObject2= response.json()
    promiseObject2.then(data=>{
        console.log(data)
    })
})