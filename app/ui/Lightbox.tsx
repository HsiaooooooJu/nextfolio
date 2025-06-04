'use client'

import cx from 'clsx'
import { useState, useEffect } from 'react'

interface PropsType {
    width?: string
    className?: string
    children: React.ReactNode
    isOpen: boolean
}

export default function Lightbox({
    width,
    className = '',
    children,
    isOpen = false,
}: PropsType) {
    const [shouldRender, setShouldRender] = useState(isOpen)

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true)
        } else {
            const timer = setTimeout(() => setShouldRender(false), 350)
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    return (
        shouldRender && (
            <>
                <div
                    className={cx(
                        'fixed inset-0 z-10',
                        'bg-black/80 transition-opacity duration-500',
                        isOpen ? 'opacity-100' : 'opacity-0',
                    )}
                ></div>
                <div
                    className={cx(
                        'fixed inset-0 z-10 mx-auto rounded-lg',
                        width ?? 'w-80',
                        className,
                        isOpen ? 'scale_up' : 'scale_down',
                    )}
                >
                    {children}
                </div>
            </>
        )
    )
}
