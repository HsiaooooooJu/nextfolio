'use client'

import { useState, useEffect } from 'react'

type StorageReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>]

export function useLocalStorage<T>(
    key: string,
    initialValue: T,
): StorageReturnType<T> {
    const [value, setValue] = useState<T>(() => {
        if (typeof window !== 'undefined') {
            try {
                const storedValue = window.localStorage.getItem(key)
                return storedValue ? JSON.parse(storedValue) : initialValue
            } catch (err) {
                console.warn(`Error retrieving value from localStorage: ${err}`)
                return initialValue
            }
        }
        return initialValue
    })

    useEffect(() => {
        try {
            const serializedValue = JSON.stringify(value)
            window.localStorage.setItem(key, serializedValue)
        } catch (err) {
            console.warn(`Error storing value in localStorage: ${err}`)
        }
    }, [key, JSON.stringify(value)])

    return [value, setValue]
}
