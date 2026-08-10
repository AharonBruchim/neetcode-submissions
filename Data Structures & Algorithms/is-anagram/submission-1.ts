class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const counts: Map<string, number> = new Map();

        for (let i = 0; i < s.length; i++) {
            const charS = s[i];
            const charT = t[i];

            counts.set(charS, (counts.get(charS) || 0) + 1);
            counts.set(charT, (counts.get(charT) || 0) - 1);
        }

        for (const count of counts.values()) {
            if (count !== 0) {
                return false;
            }
        }

        return true;
    }
}
