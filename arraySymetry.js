const arrayDiff =(arr1, arr2) =>{

    var result = [];

    for(var i =0; i<arr1.length; i++){
        if(arr2.indexOf(arr1[i])===-1){
            result.push(arr1[i])
        }
    }
    for(var j=0; j<arr2.length; j++){
        if(arr1.indexOf(arr2[j])===-1){
            result.push(arr2[j])
        }
    }
    return result;
}

console.log(arrayDiff([2,4,6,8,9,10,11,12,13], [1,3,5,7,9,10,11,12,13] ));