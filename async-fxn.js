

function helloWorld(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('Hello world thing');
        }, 5000);
    });
}

async function msg(){
    const msg= await helloWorld();
    console.log("Message: ", msg);
}
console.log("first line"); //will be printed ist
msg(); // //will be printed last
console.log("Line after function"); //will be printed 2nd