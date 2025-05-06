/**
 * Validates a numeric input string against specified rules.
 *
 * @param {string} input - The input string to validate (expected to be numeric).
 * @param {number} [length=4] - The expected length of the input string.
 *
 * @returns {{ code: InputErr; message: string }} An object containing:
 *   - code: an enum value indicating the validation result.
 *   - message: a human-readable description of the result.
 *
 * Validation rules:
 *  - Must be exactly `length` digits.
 *  - Must contain only numeric characters.
 *  - Digits must not repeat.
 *
 * Example usage:
 * const result = inputValidation('1234', 4);
 * if (result.code !== InputErr.OK) {
 *     console.error(`Error ${result.code}: ${result.message}`);
 * }
 *
 */

enum InputErr {
    OK = 200,
    INVALID_LENGTH = 400,
    NON_NUMERIC = 401,
    DUPLICATE_DIGITS = 402,
}

export default function inputValidation(
    input: string,
    length: number = 4,
): { code: InputErr; message: string } {
    const inputSize = new Set(input)
    if (input.length !== length) {
        return {
            code: InputErr.INVALID_LENGTH,
            message: `Input must be ${length} digits.`,
        }
    }

    if (!/^\d+$/.test(input)) {
        return {
            code: InputErr.NON_NUMERIC,
            message: `Input must contain only numbers.`,
        }
    }

    if (inputSize.size !== length) {
        return {
            code: InputErr.DUPLICATE_DIGITS,
            message: `Digits must not repeat.`,
        }
    }

    return {
        code: InputErr.OK,
        message: `Success`,
    }
}
