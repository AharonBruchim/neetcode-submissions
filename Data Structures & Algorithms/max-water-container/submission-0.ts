class Solution {
    maxArea(heights: number[]): number {
        let maxWater = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const width = right - left;
            const currentHeight = Math.min(heights[left], heights[right]);
            const currentWater = width * currentHeight;

            if (currentWater > maxWater) {
                maxWater = currentWater;
            }

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}