const pairs =(nums)=>{
    let numSorted= nums.sort();
    let counter =0;
    for(let i=0; i<nums.length-1; i+=2){
        if(numSorted[i]==numSorted[i+1]){ 
        console.log(counter+1)
        }
    }
    return counter

}

console.log(pairs([1,1,1,2,1,3,2, 5, 7]))