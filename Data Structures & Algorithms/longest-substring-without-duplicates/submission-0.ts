class Solution {
    lengthOfLongestSubstring(s: string): number {
        let maxLength = 0;
        let start = 0;
        const seen = new Map<string, number>();

        for (let end = 0; end < s.length; end++) {
            const char = s[end];

            if (seen.has(char)) {
                start = Math.max(start, seen.get(char)! + 1);
            }

            seen.set(char, end);
            maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
    }
}
