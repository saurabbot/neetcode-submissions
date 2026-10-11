class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        console.log(set)
        let max = 0
        for(let i =0;i<nums.length;i++) {
            let r = []
            const prevNumber = nums[i] -1
            if(!set.has(prevNumber)){
                r.push(nums[i])
                let j = nums[i]
                while(set.has(j+1)) {
                    r.push(j+1)
                    j++
                }
                max = Math.max(max, r.length)
            } else {
                continue
            }

        }
        return max
    }
}
