class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = []
        let map = new Map()
        for (const word of strs) {
            const key = word.split('').sort().join('')
            if (map.has(key)) {
            map.get(key).push(word)     // mutate the existing array
            } else {
            map.set(key, [word])        // array literal, not push()
            }
        }
        return [...map.values()]
    }
}
