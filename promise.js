const firstPromise = new Promise ((res, rej)=>{
    setTimeout(()=> res('First Promise'), 500 );
});

const secondPromise = new Promise((res, rej)=>{
    setTimeout(()=> res('Second Promise'), 200);
});

const thirdPromise = new Promise((res,rej)=>{
    setTimeout(()=>res('Third promise'), 100)
});

Promise.race([firstPromise, secondPromise, thirdPromise]).then(res=>console.log(res))