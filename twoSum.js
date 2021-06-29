var twoSum = (nums, target) =>{
    const previousValues = {}
    for(let i=0;i<nums.length; i++){
        const currentNum = nums[i];
        const neededValue = target - currentNum;
        const index2 = prevousValues[neededValue];
        if (index2!=null){
            return[index2, i]
        } else{
            previousValues[currentNum]= i;
        }
    }
};
console.log(twoSum([3,4,8,5,2], 10 ));