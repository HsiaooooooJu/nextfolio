import { useRef, useEffect, useCallback } from 'react'

export default function useThrottle<T extends unknown[]>(
    fn: (...args: T) => void,
    delay: number,
) {
    const savedFn = useRef(fn)
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        savedFn.current = fn
    }, [fn])

    const throttle = useCallback(
        (...args: T) => {
            if (timer.current) return
            timer.current = setTimeout(() => {
                savedFn.current(...args)
                timer.current = null
            }, delay)
        },
        [delay],
    )

    useEffect(() => {
        return () => {
            if (timer.current) {
                clearTimeout(timer.current)
                timer.current = null
            }
        }
    }, [])

    return throttle
}
