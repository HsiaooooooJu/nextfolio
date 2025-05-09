'use client'

import { createContext, useEffect, useState, useContext } from 'react'

type mode = 'light' | 'dark' | 'system'

interface ModeContextType {
    mode: string
    updateMode: (newMode: mode) => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export default function ModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<mode>('dark')

    useEffect(() => {
        const htmlElement = document.documentElement

        if (mode === 'system') {
            const preferDark = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches
            htmlElement.classList.remove('light', 'dark')
            htmlElement.classList.add(preferDark ? 'dark' : 'light')
        } else {
            htmlElement.classList.remove('light', 'dark')
            htmlElement.classList.add(mode)
        }
    }, [mode])

    function updateMode(newMode: mode) {
        localStorage.mode = newMode
        setMode(newMode)
    }

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
