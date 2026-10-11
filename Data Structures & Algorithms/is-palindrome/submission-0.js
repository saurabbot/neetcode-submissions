class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlnum = c =>
    (c >= '0' && c <= '9') ||
    (c >= 'a' && c <= 'z') ||
    (c >= 'A' && c <= 'Z');
        let l = 0
        let r = s.length - 1
        while(l<r) {
            while(l< r && !isAlnum(s[l]))l++
            while(l< r && !isAlnum(s[r]))r--
            if(s[l].toLowerCase() != s[r].toLowerCase()) return false
            l++
            r--

        }
        return true

    }
}
