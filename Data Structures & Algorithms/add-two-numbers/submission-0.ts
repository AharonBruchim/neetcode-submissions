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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        const dummyHead = new ListNode(0);
        let current = dummyHead;
        let carry = 0;

        while (l1 !== null || l2 !== null || carry > 0) {
            const val1 = l1 !== null ? l1.val : 0;
            const val2 = l2 !== null ? l2.val : 0;

            const sum = val1 + val2 + carry;
            carry = Math.floor(sum / 10);

            current.next = new ListNode(sum % 10);
            current = current.next;

            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }

        return dummyHead.next;
    }
}
