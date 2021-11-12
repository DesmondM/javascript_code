const qSort  = (arr) =>{
    if(arr.length<=1){
        return arr;
    }
    
    const [pivot, ...restofItems] = arr;

    //console.log(pivot);
    //console.log(...restofItems);

    const left=[], right=[];

    restofItems.forEach(element => element<pivot? left.push(element): right.push(element));

    return qSort(left).concat(pivot).concat(qSort(right))

}
console.log("Sorted items :", qSort([6,3,7,3,8,0,4,2,6,1,6,13]))
