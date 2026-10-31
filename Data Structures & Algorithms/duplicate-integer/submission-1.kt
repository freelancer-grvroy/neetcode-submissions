class Solution {
    fun hasDuplicate(nums: IntArray): Boolean {
        val set = nums.toHashSet()
        return (nums.size!=set.size)
    }
}
