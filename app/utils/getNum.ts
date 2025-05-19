/**
 * Returns a random integer between 0 (inclusive) and the specified number (exclusive).
 *
 * @param {number} num - The upper bound (exclusive) for the random integer.
 * @returns {number} A random integer from 0 up to (but not including) num.
 */
export default function getNum(num: number): number {
    return Math.floor(Math.random() * num)
}
