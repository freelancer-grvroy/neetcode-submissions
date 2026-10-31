class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        var max = 0
        if(prices.length>1) {
            var front = 0, back = 1
            while(back < prices.length) {
                if(prices[front] < prices[back]) {
                    max = Math.max(max, prices[back] - prices[front])
                } else { front = back }
                back++
            }
        }
        return max
    }
}
