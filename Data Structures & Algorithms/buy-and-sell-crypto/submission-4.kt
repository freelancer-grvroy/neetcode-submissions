class Solution {
    fun maxProfit(prices: IntArray): Int {
        var max = 0
        if(prices.size>1) {
            var front = 0
            var back = 1
            while(back < prices.size) {
                if(prices[front] < prices[back]) {
                    max = Math.max(max, prices[back] - prices[front])
                } else { front = back }
                back++
            }
        }
        return max
    }
}
