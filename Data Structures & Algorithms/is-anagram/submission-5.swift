class Solution {
    func isAnagram(_ s: String, _ t: String) -> Bool {
        if s.count != t.count { return false }
        var count = [Character:Int]()
        for (i,j) in zip(s,t) {
            count[i, default:0] += 1
            count[j, default:0] -= 1 
        }
        for v in count.values where v != 0 { return false }
        return true
    }
}
