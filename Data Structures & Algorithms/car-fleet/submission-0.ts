class Solution {
    carFleet(target: number, position: number[], speed: number[]): number {
        const n = position.length;
        if (n === 0) return 0;

        const cars = new Array<{ pos: number; time: number }>(n);
        for (let i = 0; i < n; i++) {
            cars[i] = { pos: position[i], time: (target - position[i]) / speed[i] };
        }

        cars.sort((a, b) => b.pos - a.pos);

        let fleets = 0;
        let maxTime = 0;

        for (let i = 0; i < n; i++) {
            if (cars[i].time > maxTime) {
                fleets++;
                maxTime = cars[i].time;
            }
        }

        return fleets;
    }
}