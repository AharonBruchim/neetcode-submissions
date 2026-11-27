/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let maxDiameter = 0;

        function getHeight(node: TreeNode | null): number {
            if (node === null) {
                return 0;
            }

            const leftHeight = getHeight(node.left);
            const rightHeight = getHeight(node.right);

            maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

            return 1 + Math.max(leftHeight, rightHeight);
        }

        getHeight(root);
        return maxDiameter;
    }
}
