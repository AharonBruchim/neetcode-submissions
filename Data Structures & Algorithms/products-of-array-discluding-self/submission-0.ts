class Solution {
    productExceptSelf(nums: number[]): number[] {
        const length = nums.length;
        const output: number[] = new Array(length);

        output[0] = 1;
        for (let i = 1; i < length; i++) {
            output[i] = output[i - 1] * nums[i - 1];
        }

        let rightPrefix = 1;
        for (let i = length - 1; i >= 0; i--) {
            output[i] = output[i] * rightPrefix;
            rightPrefix *= nums[i];
        }

        return output;
    }
}
