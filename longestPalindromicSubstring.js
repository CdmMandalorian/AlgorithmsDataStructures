// Given a string s, return the longest palindromic substring in s //

// Example:

//  Input:  s = "babad"
//  Output: "bab"
//  Explanation: "aba" is also a valid answer

//  Input:  s = "cbbd"
//  Output: "bb"

//  Constraints:
//  - 1 <= s.length <= 1000
//  - s consists of only digits and English letters

//  Solution:  //

  var longestPalindrome = function(s) {
      let palindromes = [];

      if(s.length <= 1) {
          return s;
      }
  
      for (var i = 0; i < s.length; i += 1) {
        j = 0;
        k = 0;
        while(s[i + j] === s[i - j] && s[i + j] && s[i - j]) {
          j++;
        };
        palindromes.push(s.slice(i-(j-1), i+j)) //even palindromes
        j = 0;
  
        while(s[(i + 1) + k] === s[i - k] && s[(i + 1) + k] && s[i - k]){
          k++;
        }
        palindromes.push(s.slice(i-(k-1),(i+1)+k)) //odd palindromes
        k = 0;
      }
      return palindromes.sort((a, b) => {
          return b.length - a.length
      })[0]; 
  };