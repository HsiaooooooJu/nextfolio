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
