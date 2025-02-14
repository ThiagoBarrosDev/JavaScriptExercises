function twoSum(nums, target) {
    nums.sort((a, b) => a - b);

    var i = 0;
    var j = nums.length;

    while(i < j){
        var TwoSum = nums[i] + nums[j];
        
        if(TwoSum === target){
            return [i, j];        
        }
        else if(TwoSum < target){
            i++;
        }
        else{
            j--;
        }
    };

};

console.log(twoSum([2, 7, 11, 25], 9), 'Result');