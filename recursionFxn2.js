const recur = (num) =>{
    
    return (num<=0) ? 0: num + recur(num-1)  
}

console.log(recur(10));