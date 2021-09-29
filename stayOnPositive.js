const minReq =(arr)=>{

    let min = 1000;
    let sum =0;

    for (var i=0; i<arr.length; i++){
        min = Math.min(min, sum+=arr[i] )
        
    }
    return min<=0 ? Math.abs(min-1) :1;

}
console.log(minReq([6000, 3000, -20000, 12000]));