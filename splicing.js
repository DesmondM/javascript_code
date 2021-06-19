const sliceIt = (arr,num,num2) =>{

   var arr2= arr.slice(num, num2)
    return arr2
}

const spliceIt2 = (arr,num) =>{

    arr.splice(arr, num)
    return arr
}
console.log(sliceIt([2,4,6,8,10], 1,3));
console.log(spliceIt2([2,4,6,8,10], 1,2));