// Given a sorted of distinct integers and a target value, return the index if the target is found  //

// If not, return index where it would ve if it were insterted in order //

//  You must write an algorithm with 0(log n) runtime complexity    //

//  Example:

//  Input:  nums = [1, 3, 5, 6], target = 5
//  Output: 2

//  Input:  nums = [1, 3, 5, 6], target = 2
//  Output: 1

//  Input:  nums = [1, 3, 5, 6], target = 7
//  Output: 4

//  Constraints:
//  - 1 <= nums.lentgh <= 10⁴
//  - -10⁴ <= nums[1] <= 10⁴
//  - nums contain distinct values sorted in ascending order
//  - -10⁴ <= target <= 10⁴

//  Solution:   //

    var searchInsert = function(nums, target) {
        if (target < nums[0]) return 0
        else if (target > nums[nums.length - 1]) return nums.length

        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            const mid = parseInt((start + end) / 2);
            const guess = nums[mid];

            if (guess === target) {
                return mid
            } else if (guess > target) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }

        return start
    };