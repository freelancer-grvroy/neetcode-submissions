class Solution {
    fun isAnagram(s: String, t: String): Boolean {
        if(s.length != t.length) return false
        var count = HashMap<Char, Int>()
        for (i in s.indices) {
            count[s[i]] = (count[s[i]] ?: 0) + 1
            count[t[i]] = (count[t[i]] ?: 0) - 1
        }
        for (v in count.values)
            if(v!=0) return false
        return true
    }
}
