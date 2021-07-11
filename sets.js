let arr =[2,3,1,4,5,3,6,2,4,3];
let arr2 =[...new Set(arr)];
console.log(arr2);

let func =arr2.reduce((a, b)=> a+b, 0)

console.log(func+arr2.length);

// Convert array to set and set to array
let conv = [2,3,4,6,7,8,3,45,67,3,5,3,56,8,5,6,4,6,4,3,5,6,4,];
let convSet = [...new Set(conv)];
let backToArray = [...convSet]
console.log(backToArray);