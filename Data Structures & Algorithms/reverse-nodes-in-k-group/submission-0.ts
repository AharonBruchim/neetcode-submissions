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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode | null {
        const dummy = new ListNode(0, head);
        let groupPrev: ListNode | null = dummy;

        while (true) {
            const kth = this.getKth(groupPrev, k);
            if (!kth) {
                break;
            }
            const groupNext = kth.next;

            let prev: ListNode | null = kth.next;
            let curr: ListNode | null = groupPrev!.next;

            while (curr !== groupNext) {
                const tmp = curr!.next;
                curr!.next = prev;
                prev = curr;
                curr = tmp;
            }

            const tmp = groupPrev!.next;
            groupPrev!.next = kth;
            groupPrev = tmp;
        }

        return dummy.next;
    }

    private getKth(curr: ListNode | null, k: number): ListNode | null {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}
