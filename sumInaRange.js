const sunInRange = (range)=>{
    let min = Math.min(range[0], range[1])
    let max= Math.max(range[0], range[1])
    var sum=0;
    for(var i=min; i<=max; i++){
        sum+=i;
    }
    return sum;

}
console.log("The total is");
console.log(sunInRange([1, 4]))