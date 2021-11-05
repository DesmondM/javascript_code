const maxDiff = (nums)=>{
    nums.sort((a,b)=>(a-b))

    var diff =0;

    for(var i =0; i<nums.length; i++){
        if((nums[i+1]+nums[i] > diff)){
        diff = nums[i+1]-nums[i]
        console.log(`Difference so far is ${diff}`)
        }
    }
        return diff
}

console.log(maxDiff([1,6,3,8,3,6,3,7,15,9,3]))