// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] //

// Such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0   //

// Notice that the solution set must not contain duplicate triplets //

//  Example:

//  Input:  nums = [-1, 0, 1, 2, -1, -4]
//  Output: [[-1, -1, 2], [-1, 0, 1]]

//  Input:  nums = []
//  Output: []

//  Input:  nums = [0]
//  Output: []

//  Constraints:
//  - 0 <= nums.length <= 3000
//  - -10⁵ <= nums[i] <= 10⁵

//  Solution:   //

    function threeSum(nums, target = 0) {     
        let ret = [];

        // can not form a triplet
        if (nums.length < 3) {
            return ret;
        }

        // this sort take time but will save us
        // a huge amount of time and memory
        // because we don't have to save and compare with any hash map
        nums.sort((a,b) => a - b);
        
        // we sorted our array so 
        // we will stop when nums[i] > target
        // because further numbers are also > target then
        // a triplet with those numbers will always > target    
        for (let i = 0; i < nums.length - 2 && nums[i] <= target; i++) {
            // we checked this value before and
            // same values will generate same triplets so we just skip
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            // our array was sorted, so smaller numbers will match with bigger numbers
            // that's why we can use two pointers running from two sides to find
            // the second and the third numbers of our triplets.
            // we stop when we checked all values (j == k)
            for (var j = i + 1, k = nums.length - 1; j < k;) {            

                // calculate sum and return result if the sum matches the target
                let sum = nums[i] + nums[j] + nums[k];

                if (sum < target) {
                    // the sum is still small so we can increase the small number
                    j++;
                    continue;
                } else if (sum > target) {
                    // the sum is still big so we can decrease the big number
                    k--;
                    continue;
                } 
                
                // sum == target so we just return
                // and pointing our pointers to new positions
                ret.push([nums[i], nums[j], nums[k]]);

                // the same value for either elements at j or k 
                // will return the same triplets
                // so we just skip all similar elements            
                while (nums[j] === nums[j+1]) j++;
                while (nums[k] === nums[k-1]) k--;

                // finally, we need to move out from the values that we checked
                j++;
                k--; 
            }
        }

        return ret;
    }