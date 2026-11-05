class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxArea = 0;
        const stack: number[] = [];
        const n = heights.length;

        for (let i = 0; i <= n; i++) {
            const currentHeight = i === n ? 0 : heights[i];

            while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
                const h = heights[stack.pop()!];
                const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, h * w);
            }

            if (i < n) stack.push(i);
        }

        return maxArea;
    }
}