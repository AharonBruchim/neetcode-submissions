class Solution {
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        let A = nums1;
        let B = nums2;

        if (A.length > B.length) {
            A = nums2;
            B = nums1;
        }

        const m = A.length;
        const n = B.length;
        let low = 0;
        let high = m;

        while (low <= high) {
            const partitionA = Math.floor((low + high) / 2);
            const partitionB = Math.floor((m + n + 1) / 2) - partitionA;

            const maxLeftA = partitionA === 0 ? -Infinity : A[partitionA - 1];
            const minRightA = partitionA === m ? Infinity : A[partitionA];

            const maxLeftB = partitionB === 0 ? -Infinity : B[partitionB - 1];
            const minRightB = partitionB === n ? Infinity : B[partitionB];

            if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
                if ((m + n) % 2 === 0) {
                    return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
                } else {
                    return Math.max(maxLeftA, maxLeftB);
                }
            } else if (maxLeftA > minRightB) {
                high = partitionA - 1;
            } else {
                low = partitionA + 1;
            }
        }

        return 0.0;
    }
}
