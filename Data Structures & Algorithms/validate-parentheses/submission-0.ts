class Solution {
    isValid(s: string): boolean {
        const stack: string[] = [];
        const bracketMap: { [key: string]: string } = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (bracketMap[char] !== undefined) {
                const topElement = stack.length > 0 ? stack.pop() : '#';
                if (bracketMap[char] !== topElement) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
