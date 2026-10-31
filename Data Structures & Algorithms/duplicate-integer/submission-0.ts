class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const arr = new Set(nums)
        return (nums.length != arr.size)
    }
}
