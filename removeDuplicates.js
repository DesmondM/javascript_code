const remove = (arr)=>{
    var unique = [];
    var len = arr.length;

    for(var i=0; i<len; i++){
        if(unique.indexOf(arr[i])===-1)
        unique.push(arr[i])
    }
    
    return unique
}

console.log(remove([1,3,3,3,4,7,6,7,6,12,11,11,13]))