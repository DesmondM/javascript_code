const arr = [2,4,6,6,10]
const reducer = arr.reduce((currentItem, arr)=>{
    return arr + currentItem;
}, 0)
console.log(reducer);
