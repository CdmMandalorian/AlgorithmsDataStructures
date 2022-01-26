// Given a string s, find the length of the longest substring without repeating characters //

// Example:

//  Input:  s="abcabcbb"
//  Output: 3
//  Explanation:    The answer is "abc", with length of 3

//  Input:   s="bbbbbbb"
//  Output: 1
//  Explanation:    The answer is "b", with length of 1

//  Input:  s="pwwkew"
//  Output: 3
//  Explanation:    The answer is "wke", with length of 3
//  Notice that the answer must be a substring, "pwke", is a subsequenceand not a substring

//  Constraints:
//  - 0 <= s.length <= 5 * 10⁴
//  s consists of English letters, digits, symbols and spaces

//  Solution: //

    var lengthOfLongestSubstring = function(s) {
        let max_len = 0;
        let curr = 0;
        let hash = {};
        if (s.length < 2) {
            return s.length;
        }
        for(let i =0; i < s.length; i++) {
            if(hash[s[i]] === null) {
                curr += 1;
            } else {
                curr = Math.min(i - hash[s[i]], curr + 1);
            }
            max_len = Math.max(max_len, curr);
            hash[s[i]] = i; // save the index
        }
        return max_len;
    };