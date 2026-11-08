class Solution {
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = 0;
        for (const pile of piles) {
            if (pile > right) {
                right = pile;
            }
        }

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            let hoursSpent = 0;

            for (const pile of piles) {
                hoursSpent += Math.ceil(pile / mid);
            }

            if (hoursSpent <= h) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}
