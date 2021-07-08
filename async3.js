const fetch = require('node-fetch');
/* const url = `https://jsonplaceholder.typicode.com/todos/1`;
fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    }); */

    const loadData = async () =>{
        const url = `https://jsonplaceholder.typicode.com/todos/1`;
        const res = await fetch(url); 
        const data = await res.json();
        console.log(data);
    }

    loadData();