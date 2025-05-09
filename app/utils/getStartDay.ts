/**
 * Returns a new Date object set to the start of the given date (time set to midnight).
 *
 * @param {Date} date - The input date.
 * @returns {number} A timestamps from the new Date object with the time set to 00:00:00.
 **/
export default function getStartDay(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}
