export default function throttle<T extends unknown[]>(
    fn: (...args: T) => void,
    delay: number = 500,
) {
    let timer: ReturnType<typeof setTimeout> | null = null
    return (...args: T) => {
        if (timer) return
        timer = setTimeout(() => {
            fn(...args)
            timer = null
        }, delay)
    }
}
