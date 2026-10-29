class Solution {
    minWindow(s: string, t: string): string {
        if (!s || !t || s.length < t.length) {
            return "";
        }

        const tCounts = new Map<string, number>();
        for (const char of t) {
            tCounts.set(char, (tCounts.get(char) || 0) + 1);
        }

        const required = tCounts.size;
        const windowCounts = new Map<string, number>();

        let left = 0;
        let right = 0;
        let formed = 0;

        let minLength = Infinity;
        let minLeft = 0;

        while (right < s.length) {
            const char = s[right];
            windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

            if (tCounts.has(char) && windowCounts.get(char) === tCounts.get(char)) {
                formed++;
            }

            while (left <= right && formed === required) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    minLeft = left;
                }

                const leftChar = s[left];
                windowCounts.set(leftChar, windowCounts.get(leftChar)! - 1);

                if (tCounts.has(leftChar) && windowCounts.get(leftChar)! < tCounts.get(leftChar)!) {
                    formed--;
                }

                left++;
            }

            right++;
        }

        return minLength === Infinity ? "" : s.substring(minLeft, minLeft + minLength);
    }
}
