'use client'

import { useState } from 'react'
import cx from 'clsx'

import { Button } from './index'
import { Arrow } from '../icons/index'

interface PropsType {
    children: React.ReactNode
    title: string
    arrowStyle?: string
    fontStyle?: string
}

export default function Accordion({
    children,
    title,
    arrowStyle,
    fontStyle,
}: PropsType) {
    const [show, setShow] = useState<boolean>(false)

    return (
        <section className={cx('mt-4 px-1', fontStyle || 'font-code')}>
            <Button
                onClick={() => setShow(!show)}
                noShadow
                className='hover:text-shadow-white/60'
            >
                <div
                    className={
                        arrowStyle ||
                        'text-canary flex cursor-pointer gap-2 text-xl font-semibold'
                    }
                >
                    <Arrow
                        className={cx(
                            show ? 'rotate-90' : 'rotate-0',
                            'my-auto transition-transform duration-200',
                        )}
                    />
                    {title && title}
                </div>
            </Button>
            <div
                className={cx(
                    'origin-top transition-all duration-800 ease-in-out',
                    show
                        ? 'max-h-80 scale-y-100 opacity-100'
                        : 'max-h-0 scale-y-0 opacity-0',
                )}
            >
                {children}
            </div>
        </section>
    )
}
