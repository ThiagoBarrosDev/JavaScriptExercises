/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  var index = 1;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
        nums[index] = nums[i];
      index ++;
    }
  }
  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 4]), "Result");

// i = 0 number = 0  array  0 0 1 1 1 2 2 3 4
// j = 1 number = 0 array  0 0 1 1 1 2 2 3 4
// pop i
// i = 1 number 1 array - 1 2
// j = 2 number 2 array - 1 2
// don't pop
