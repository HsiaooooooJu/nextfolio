'use client'

import { useState } from 'react'
import cx from 'clsx'

import { Button } from '../../ui'
import { Arrow } from '../../icons/index'

export default function Instruction() {
    const [show, setShow] = useState<boolean>(false)

    return (
        <section className='font-code mt-4 px-1'>
            <Button
                onClick={() => setShow(!show)}
                noShadow
                className='hover:text-shadow-white/60'
            >
                <div className='text-canary flex cursor-pointer gap-2 text-xl font-semibold'>
                    <Arrow
                        className={cx(
                            show ? 'rotate-90' : 'rotate-0',
                            'my-auto transition-transform duration-200',
                        )}
                    />
                    How to play
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
                <div className='space-y-2 px-8 font-medium'>
                    <p>
                        For each guess, you will get feedback in the format&ensp;
                        <b className='text-pink'>_</b>A<b className='text-pink'>_</b>
                        B, where:
                    </p>
                    <div className='space-y-1'>
                        <p className='flex'>
                            <span className='text-coral mr-1'>A:</span>
                            numbers that&apos;re correct and in the correct position.
                        </p>
                        <p className='flex'>
                            <span className='text-coral mr-1'>B:</span>
                            numbers that&apos;re correct but in the wrong position.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
