class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map()
  let left = 0
  let maxFreq = 0
  let max = 0

  for (let right = 0; right < s.length; right++) {
    const ch = s[right]
    count.set(ch, (count.get(ch) ?? 0) + 1)
    maxFreq = Math.max(maxFreq, count.get(ch))

    while ((right - left + 1) - maxFreq > k) {   // too many replacements
      count.set(s[left], count.get(s[left]) - 1)
      left++
    }
    max = Math.max(max, right - left + 1)
  }
  return max
    }
}
