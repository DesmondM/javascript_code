const dupli =(arr)=>{
    /* return arr.concat(arr); */
    return [...arr, arr];
}

console.log(dupli([2,4,6,8]))