const largestInArray = (nums)=>{
   var maxes=[];
    for(let i=0; i<nums.length; i++){
        var max = nums[i][0];
        for(let j=0; j< nums[i].length; j++){
            
            if (nums[i][j]>=max){
                max = nums[i][j]
            }
        }
        maxes.push(max)
    }
    return maxes;
}

console.log(largestInArray([[3,4,6,7,7],[10,22,34,1,4],[12,45,4,67,2],[2,6,3,9,7],[10,12, 13, 45,11]]))