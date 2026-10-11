class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let res = new Array(n)
        let left = 1
        for(let i =0;i<n;i++){
            res[i] = left;
            left *= nums[i]
        }
        let right = 1
        for(let i =n-1;i>=0;i--){
            res[i] *= right;
            right *= nums[i]
        }
        return res
    }
}
