// Considered you are given an array of integers and a target sum, return indices of 2 numbers in the array such that they add up to the given target //

// You may assume that each input would have exactly one solution, and may not use the same element twice //

// Example:

// Input: nums = [7, 2, 13, 11]  Target = 9
// Output: [0, 1] 

// Solution:  //

    var twoSum = function( nums, target) {
        for(let m = 0; m < nums.length - 1; m++) {
            for(let n = m + 1; n < nums.length; n++) {
                if(nums[m] + nums[n] === target) {
                    return [m, n];
                }
            }
        }
    };