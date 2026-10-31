class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var pos = [Int:Int]()
        for (i, x) in nums.enumerated() {
            if let second = pos[target - x] {
                return [second, i]
            }
            pos[x] = i
        }
        return []
    }
}
