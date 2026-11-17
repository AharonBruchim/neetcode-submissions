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
    removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        const dummy = new ListNode(0, head);
        let fast: ListNode | null = dummy;
        let slow: ListNode | null = dummy;

        for (let i = 0; i <= n; i++) {
            if (fast) {
                fast = fast.next;
            }
        }

        while (fast !== null) {
            fast = fast.next;
            slow = slow!.next;
        }

        if (slow && slow.next) {
            slow.next = slow.next.next;
        }

        return dummy.next;
    }
}
