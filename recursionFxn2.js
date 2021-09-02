const recur = (num) =>{
    console.log(num);
    return (num<=0) ? 0: recur(num-1)  
}

console.log(recur(10));