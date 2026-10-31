class Solution {
    fun isPalindrome(s: String): Boolean {
        val temp = s.replace(Regex("[^a-zA-z0-9]"),"").lowercase()
        val len = temp.length
        for(i in 0 until len) {
            if(temp[i] != temp[len-i-1])
                return false
        }
        return true
    }
}
