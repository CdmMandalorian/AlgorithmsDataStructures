// Given an integer x, return true if x is palindrome integer  //

// An integer is a palindrome when it reads the same backwards as forward  //

//  For example, 121 is palindrome while 123 is not  //

//  Example:

//  Input:  x = 121
//  Output: true
//  Explanation:    121 reads as 121 from left to right and from right to left

//  Input:  x = -121
//  Output: false
//  Explanation:    From left to right it reads -121. From right to left it reads 121-. Therefore it is not a palindrom

//  Input:  x = 10
//  Output: false
//  Explanation:    Reads 01 from right to left. Therefore it is not a palindrome.

//  Constraints:
//  - -2³¹ <= x <= 2³¹ - 1

//  Solution:   //

    var isPalindrome = function(x) {
        return x === Number(x.toString().split("").reverse().join(""));
    };