class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(const n of nums ) {
            map.set(n, (map.get(n) ??  0) + 1)
        }
        const buckets = Array.from({length: nums.length + 1}, () => [])
        for(const [num,freq] of map) buckets[freq].push(num)
        const result = []
        for (let f = buckets.length - 1; f > 0 && result.length < k; f--) {
            for (const num of buckets[f]) {
            result.push(num)
            if (result.length === k) break
            }
        }
        return result
    }
}
