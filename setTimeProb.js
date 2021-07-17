const arr = [2,4,6,8,10];

for(var i=0; i<arr.length; i++){
    setTimeout(function(){
        console.log(`Index is ${i}, and element is ${arr[i]}`)
    }, 2000)
}

for(var j =0; j<10; j++){
    console.log(`Index is ${j}`)
}
console.log(`The last Index is ${j}`);