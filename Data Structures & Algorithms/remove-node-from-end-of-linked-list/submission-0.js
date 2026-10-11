/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0
        let cur = head
        while(cur) {
            length++
            cur = cur.next
        }
        if(n == length) {
            return head.next
        }
        cur = head 
        for(let i = 1;i<length-n;i++){
            cur = cur.next
        }
        cur.next = cur.next.next
        return head


    }
}
