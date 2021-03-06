// Given a signed 32-bit integer x, return x with its digits reversed.  //

// If reversing x causes the value to go outside of the signed 32-bit integer range [-2³¹, 2³¹ - 1], then return 0 //

// Asume the enviroment does not allow you to store 64-bit integers (signed or unsigned)  //

//  Example:

//  Input:  x = 123
//  Output: 321

//  Input:  x = -123
//  Output: -321

//  Input:  x = 120
//  Output: 21

//  Constraints:
//  - -2³¹ <= x <= 2³¹ - 1

//  Solution:   //

    var reverse = function(x) {
        let limit = 2147483648;
        let k = x < 0 ? -1 : 1;
        let n = Number(String(Math.abs(x)).split('').reverse().join(''));
        return n > limit ? 0 : n * k;
    };