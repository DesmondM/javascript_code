const rotate = (arr, num) =>{
  if (num ===0) return arr;
  for(let i=0; i<num; i++){
     var element = arr.shift();
     arr.push(element);
  }   
  return arr;
}
console.log(rotate([2,3,4,5,6,7,8], 3));