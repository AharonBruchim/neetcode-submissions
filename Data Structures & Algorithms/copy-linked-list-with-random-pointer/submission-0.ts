// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node | null {
        if (!head) {
            return null;
        }

        let curr: Node | null = head;
        while (curr) {
            const copy = new Node(curr.val, curr.next, null);
            curr.next = copy;
            curr = copy.next;
        }

        curr = head;
        while (curr) {
            if (curr.random && curr.next) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next ? curr.next.next : null;
        }

        curr = head;
        const dummyHead = new Node(0);
        let copyCurr: Node | null = dummyHead;

        while (curr) {
            const copy = curr.next;
            const nextOriginal = copy ? copy.next : null;

            copyCurr.next = copy;
            if (copy) {
                copyCurr = copy;
            }

            curr.next = nextOriginal;
            curr = nextOriginal;
        }

        return dummyHead.next;
    }
}
