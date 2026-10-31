class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        var pos = new Map<number, number>()
        for (const [i,x] of nums.entries())
            pos.set(x, i)
        for (const [i,x] of nums.entries()) {
            if(pos.has(target-x)) {
                const second = pos.get(target-x)
                if(second === i) continue
                return [i, second]
            }
        }
        return [-1,-1]
    }
}
