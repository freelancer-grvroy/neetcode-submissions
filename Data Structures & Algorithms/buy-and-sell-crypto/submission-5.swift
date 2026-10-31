class Solution {
    func maxProfit(_ prices: [Int]) -> Int {
        var m = 0
        if(prices.count>1) {
            var front = 0, back = 1
            while(back < prices.count) {
                if(prices[front] < prices[back]) {
                    m = max(m, prices[back] - prices[front])
                } else { front = back }
                back+=1
            }
        }
        return m
    }
}
