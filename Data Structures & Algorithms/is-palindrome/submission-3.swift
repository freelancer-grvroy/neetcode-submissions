class Solution {
    func isPalindrome(_ s: String) -> Bool {
        let temp = Array(s.lowercased().filter {$0.isASCII && ($0.isLetter || $0.isNumber)})
    
        let len = temp.count
        for i in 0..<len/2 {
            if(temp[i] != temp[len-i-1]) {return false}
        }
        return true
    }
}
