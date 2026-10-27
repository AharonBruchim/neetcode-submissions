class Solution {
    characterReplacement(s: string, k: number): number {
        let maxLength = 0;
        let maxCount = 0;
        const countMap = new Map<string, number>();
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            countMap.set(char, (countMap.get(char) || 0) + 1);
            maxCount = Math.max(maxCount, countMap.get(char)!);

            while ((right - left + 1) - maxCount > k) {
                const leftChar = s[left];
                countMap.set(leftChar, countMap.get(leftChar)! - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
