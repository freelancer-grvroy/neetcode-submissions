class Solution {
    func hasDuplicate(_ nums: [Int]) -> Bool {
        var seen = Set<Int>()
        for x in nums {
            if(!seen.insert(x).inserted) {return true}
        }
        return false
    }
}
