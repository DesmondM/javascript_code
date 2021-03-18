var arr = [3,4,5,6,6,6,7,8,8];
function removeDuplicates(entries){
    return entries.filter((value, index)=>entries.indexOf(value)===value);
}
console.log(removeDuplicates(arr));