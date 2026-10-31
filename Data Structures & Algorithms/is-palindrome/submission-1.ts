class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        var temp = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        for (var i=0,j=temp.length-1;i<j;i++,j--) {
            if(temp[i] !== temp[j]) return false
        }
        return true
    }
}
