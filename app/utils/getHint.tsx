/**
 * Compares the player's guess against the answer and calculates hints.
 *
 * Counts how many digits are correct and in the correct position (`A`),
 * Counts how many digits are correct but in the wrong position (`B`).
 *
 * @param {string[]} value - The player's guessed digits as an array of strings (e.g., ['1', '2', '3', '4']).
 * @param {string[]} answer - The correct answer as an array of numbers (e.g., [1, 2, 3, 4]).
 * @returns {string} string with counts of A (correct position) and B (wrong position).
 */
export default function getHint(value: string[], answer: string[]): string {
    let A = 0
    let B = 0

    value.forEach((num, i) => {
        if (num === answer[i]) {
            A++
        } else if (answer.includes(num)) {
            B++
        }
    })

    return `${A}A${B}B`
}
