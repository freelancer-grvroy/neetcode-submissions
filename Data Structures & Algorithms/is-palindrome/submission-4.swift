class Solution {
    func isPalindrome(_ s: String) -> Bool {
        let s = Array(s.lowercased().filter {$0.isASCII && ($0.isLetter || $0.isNumber)})
    
        let len = s.count
        for i in 0..<len/2 {
            if(s[i] != s[len-i-1]) {return false}
        }
        return true
    }
}
