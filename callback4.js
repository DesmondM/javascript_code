let numbers = [1,2,3,4,5,6,7,8,9];
const isOdd =(numbers)=>{
    return numbers%2;

}
const oddNumbers = numbers.filter(isOdd)
console.log(oddNumbers);