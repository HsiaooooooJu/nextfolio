/**
 * Returns a new Date object set to the start of the given date (time set to midnight).
 *
 * @param {Date} date - The input date.
 * @returns {number} A timestamps from the new Date object with the time set to 00:00:00.
 **/
export function getStartDay(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

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
export function generateAnswer() {
    const number = Array.from({ length: 10 }, (_, i) => i)
    let answer = []

    while (answer.length < 4) {
        const index = getDigit(number.length)
        answer.push(number[index])
        number.splice(index, 1)
    }
    return answer
}

/**
 * Compares the player's guess against the answer and calculates hints.
 *
 * Counts how many digits are correct and in the correct position (`A`),
 * Counts how many digits are correct but in the wrong position (`B`).
 *
 * @param {string[]} value - The player's guessed digits as an array of strings (e.g., ['1', '2', '3', '4']).
 * @param {number[]} answer - The correct answer as an array of numbers (e.g., [1, 2, 3, 4]).
 * @returns {string} string with counts of A (correct position) and B (wrong position).
 */
export function getHint(value: string[], answer: number[]): string {
    let A = 0
    let B = 0

    value.forEach((num, i) => {
        if (Number(num) === answer[i]) {
            A++
        } else if (answer.includes(Number(num))) {
            B++
        }
    })

    return `${A}A${B}B`
}
