//  Given an integer array nums an d interger val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed    //

//  Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums  //

//  More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result    //

//  It does not matter what you leave beyond the first k elements   //

//  Return k after placing the final result in the first k slots of nums    //

//  Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) exta memory //

//  Custom Judge:

//  The judge will test your solution with the following code:

//  int[] nums = [...]; //  Input array
//  int val = ...; //   The expected answer with correct length
//  int[] expectedNums = [...]; // The expected answer with correct length
                                //  It is sorted with no values equaling val

//  int k  = removeElement(nums, val);  // Calls your implementation

//  assert k == expectedNums.length;
//  sort(nums, 0, k);   //  Sort the first k elements of nums
//  for (int i = 0; i < actualLength; i ++) {
//      assert nums[i] == expectedNums[i];
//  }

//  If all asertions pass, then your solution will be accepted  //

//  Example:

//  Input:  nums = [3, 2, 2, 3] val = 3
//  Output: 2, nums = [2, 2, _, _]
//  Explanation:    Your function should return k = 2, with the first two elements of nums being 2
//                  It does not matter what you leave beyond the returned k (hence they are underscores)

//  Input:  nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
//  Output: 5, nums = [0, 1, 4, 0, 3, _, _, _]
//  Explanation:    Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4
//                  It does not matter what you leave beyond the returned k (hence they are underscores)

//  Constraints:
//  - 0 <= nums.length <= 100
//  - 0 <= nums[i] <= 50
//  - 0 <= val <= 100

//  Solution:   //

    var removeElement = function(nums, val) {
        if (!nums.length) {
            // when there is no nums in the array return 0
            return 0;
        }
        
        if (val === undefined) {
            throw new Error('argument val cannot be undefined for removeElement function');
        }
        
        let index = 0;
        
        /* for each items in the given array, check if the val is not equivalent to the val to the removed
         * if yes, then copy that value to the index which we are having as a pointer
         * and then increment the index by 1
         * finally return the index which should hold the number is items in the given array which is not === val
        */
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[index] = nums[i];
                index++;
            }
        }
        
        return index;
    };