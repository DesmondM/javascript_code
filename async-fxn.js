

function helloWorld(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('Hello world thing');
        }, 2000);
    });
}

async function msg(){
    const msg= await helloWorld();
    console.log("Message: ", msg);
}

msg();