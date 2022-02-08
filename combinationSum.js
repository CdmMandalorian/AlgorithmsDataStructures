//  Given an array of distince integers candidates and a target integer target, return a lists of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order    //

//  The same number may be chosen from cadidates an ulimited number of times. Two combinations are unique from candidates an unlimited number of times. Two combinations are uinque if the frequency of at least one of the chosen numbers is different //

//  It is guaraneed that the number of unique combinations that sum up to target is less than 150 combinations for the given input  //

//  Example:

//  Input:  candidates = [,2 3,  6, 7], target = 7
//  Output: [[2, 3, 3], [7]]
//  Explanation:    2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that can be use multiple times
//                  7 is a candidate, and 7 = 7. These are the only two combinations

//  Input:  candidates = [2, 3, 5], target = 8
//  Output: [[2,2,2,2], [2,3,3], [3,5]]

//  Input:  candidates = [2], target = 1
//  Output: []

//  Constraints:    //
//  - 1 <= candidates.length <= 30  //
//  - 1 <= candidates[1] <= 200     //
//  - All elements of candidates are distinct   //
//  - 1 <= target <= 500    //

//  Solution:   //

    var combinationSum = function(candidates, target) {
        const result = [];
    
        function permute(arr=[], sum=0, idx=0) {
            if(sum > target) return;
            if(sum === target) result.push(arr);
            
            for(let i = idx; i < candidates.length; i++) {
                permute([...arr, candidates[i]], sum+candidates[i], i);
            }
        }
        permute()
        return result;
    };