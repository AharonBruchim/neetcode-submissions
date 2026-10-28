class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) matches++;
        }

        for (let i = s1.length; i < s2.length; i++) {
            if (matches === 26) return true;

            const r = s2.charCodeAt(i) - 97;
            s2Count[r]++;
            if (s1Count[r] === s2Count[r]) {
                matches++;
            } else if (s1Count[r] + 1 === s2Count[r]) {
                matches--;
            }

            const l = s2.charCodeAt(i - s1.length) - 97;
            s2Count[l]--;
            if (s1Count[l] === s2Count[l]) {
                matches++;
            } else if (s1Count[l] - 1 === s2Count[l]) {
                matches--;
            }
        }

        return matches === 26;
    }
}
