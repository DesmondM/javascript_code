const sumInRange = arr =>{
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    var total=0;
    for(var i =min; i<=max; i++){
        total+=i;
    }
    return total
}

console.log(sumInRange([2, 6]));