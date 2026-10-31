class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length)
            return false
        else {
            var count = new Map<string,number>()
            for(const c of s) {
                count.set(c, (count.get(c)??0)+1)
            }
            for(const c of t) {
                if(!count.has(c))
                    return false
                else {
                    const rep = count.get(c)
                    if(rep === 1)
                        count.delete(c)
                    else
                        count.set(c, rep-1)
                }
            }
            return true
        }
    }
}
