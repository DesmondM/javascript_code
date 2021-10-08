const destroy = (arr) =>{
    var args = Array.from(arguments);
    args.splice(0, 1);

    var targets = args;
    var result =[];
    
    for(var num of arr){
        if(targets.indexOf(num)===-1){
            result.push(num);
        }
    }
    return result;

}
console.log(destroy([1,2,3,1,2,3], 2, 3))