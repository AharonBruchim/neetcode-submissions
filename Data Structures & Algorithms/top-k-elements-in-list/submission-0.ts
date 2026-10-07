class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
    const frequency = new Map<number, number>();
            for (const num of nums) {
        frequency.set(num, (frequency.get(num) ?? 0) + 1);
    }

    return [...frequency.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => num);
    }
}