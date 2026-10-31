class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        var pos = HashMap<Int,Int>()
        for((i,x) in nums.withIndex()) pos[x] = i
        for((i,x) in nums.withIndex()) {
            val second = pos[target - x]
            if(second != null && second != i)
                return intArrayOf(i,second)
        }
        return intArrayOf()
    }
}
