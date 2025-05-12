'use client'

import { createContext, useCallback, useEffect, useState, useContext } from 'react'

type Mode = 'light' | 'dark' | 'system' | ''

interface ModeContextType {
    mode: string
    updateMode: (newMode: Mode) => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export default function ModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<Mode>('')

    useEffect(() => {
        function handleModeChange() {
            const isMediaDarkMode = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches
            const isDarkMode =
                localStorage.mode === 'dark' ||
                (!('mode' in localStorage) && isMediaDarkMode)

            if (isDarkMode) {
                setMode('dark')
                document.documentElement.classList.add('dark')
            } else {
                setMode('light')
                document.documentElement.classList.remove('dark')
            }
        }
        handleModeChange()
    }, [mode])

    const updateMode = useCallback(
        function (newMode: Mode) {
            localStorage.mode = newMode
            setMode(newMode)
        },
        [setMode],
    )

    return (
        <ModeContext.Provider value={{ mode, updateMode }}>
            {children}
        </ModeContext.Provider>
    )
}

export function useMode() {
    const context = useContext(ModeContext)
    if (!context) {
        throw new Error('useMode must use in ModeProvider.')
    }
    return context
}
