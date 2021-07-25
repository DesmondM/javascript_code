async function getData(){
    return await Promise.resolve("Promise resolved");
}

const data = getData();
console.log(data);  // promise pending

data.then(res=>console.log(res));  //resolved