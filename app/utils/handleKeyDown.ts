/**
 * Utility function to handle a specific keyboard event key.
 *
 * @param {React.KeyboardEvent<HTMLElement>} e - The keyboard event triggered by a key press.
 * @param {string} expectedKey - The key to listen for (e.g., 'Enter', 'Escape', 'ArrowUp').
 * @param {() => void} callback - The function to execute when the expected key is pressed.
 *
 * @example
 * <div onKeyDown={(e) => handleKeyDown(e, 'Enter', () => console.log('Enter pressed'))}>
 *     Press Enter
 * </div>
 */

export default function handleKeyDown(
    e: React.KeyboardEvent<HTMLElement>,
    expectedKey: string,
    callback: () => void,
) {
    if (e.key === expectedKey && callback) {
        callback()
    }
}
