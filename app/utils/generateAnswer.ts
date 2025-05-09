/**
 * Returns a random integer between 0 (inclusive) and the specified number (exclusive).
 *
 * @param {number} num - The upper bound (exclusive) for the random integer.
 * @returns {number} A random integer from 0 up to (but not including) num.
 */
export function getDigit(num: number): number {
    return Math.floor(Math.random() * num)
}

/**
 * Generates a 4-digit unique number array for the game.
 * It randomly selects 4 unique digits (0–9) without repeats.
 *
 * @returns {number[]} An array of 4 unique digits (each 0–9).
 * [1, 2, 3, 4]
 */
export default function generateAnswer(): string[] {
    const number = Array.from({ length: 10 }, (_, i) => i.toString())
    const answer = []

    while (answer.length < 4) {
        const index = getDigit(number.length)
        answer.push(number[index])
        number.splice(index, 1)
    }
    return answer
}
