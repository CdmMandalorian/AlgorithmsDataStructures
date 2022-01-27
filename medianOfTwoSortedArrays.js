// Given 2 sorted arrays nums1 and nums2 of size m and n respectively, return the median of the sorted arrays  //

// The overall run time complexity should be 0(log (m+n))  //

//  Example:
//  Input:  nums1 = [1,3], nums2 = [2]
//  Output: 2.00000
//  Explanation:    Merged array = [1, 2, 3] and Median is 2.00000

//  Input: nums1 = [1, 2], nums2 = [3, 4]
//  Output: 2.50000
//  Explanation:    Merged array = [1, 2, 3, 4] and Median is (2+3)/2 = 2.5

//  Constraints:
//  - nums1.length == m
//  - nums2.length == n
//  - 0 <= m <= 1000
//  - 0 <= n <= 1000
//  - 1 <= m + n <=2000
//  - 10⁶ <= nums1[i], nums2[i] <= 10⁶

// Solution:  //

    var findMedianSortedArrays = function(nums1, nums2) {
        var m = nums1.length;
        var n = nums2.length;
        
        if(m>n){
            return findMedianSortedArrays(nums2, nums1);
        }
        var halfLength = Math.floor((m + n + 1)/2);
        
        var start = 0;
        var end = m;
        
        while(start<=end){
            
            var partM = Math.floor((start + end)/2);
            var partN = halfLength - partM;
            
            var leftMaxM = partM == 0? -99999999: nums1[partM-1];
            var leftMaxN = partN == 0? -99999999: nums2[partN-1];
            
            var rightMinM = partM == m? 99999999: nums1[partM];
            var rightMinN = partN == n? 99999999: nums2[partN];
            
            if(leftMaxM<=rightMinN && leftMaxN<=rightMinM) {
                if((m+n)%2 == 0) {
                    return (Math.max(leftMaxM,leftMaxN) + Math.min(rightMinM, rightMinN))/2
                }
                else return Math.max(leftMaxM,leftMaxN)
            }
        else if (leftMaxM>rightMinN){
            //Shift PartM Left
            end = partM-1;
        }
            else{
                //Shift partM Right
                start = partM+1
            }
        }
    };