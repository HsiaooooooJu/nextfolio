'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '../ui'
import { throttle } from '../utils'

import cx from 'clsx'

const colorMap = [
    ['bg-blue/25', 'group-hover:bg-pink/25'],
    ['bg-blue/50', 'group-hover:bg-pink/50'],
    ['bg-blue/75', 'group-hover:bg-pink/75'],
    ['bg-blue', 'group-hover:bg-pink'],
]

const maxBarRatio = 87.5

export default function LandingDeco() {
    const [hue, setHue] = useState(360)
    const [dragging, setDragging] = useState(false)
    const barRef = useRef<HTMLDivElement>(null)
    const throttledUpdateHue = useRef<(x: number) => void>(null)
    const leftDistance = `${(hue / 360) * maxBarRatio}%`
    const filterStyle = `hue-rotate(${hue}deg)`

    useEffect(() => {
        if (!dragging) return

        if (!throttledUpdateHue.current) {
            throttledUpdateHue.current = throttle((x: number) => {
                if (!barRef.current) return
                const { left, width } = barRef.current.getBoundingClientRect()
                const moveDeg = Math.round(((x - left) / width) * 360)
                setHue(Math.min(Math.max(moveDeg, 0), 360))
            }, 16)
        }

        const handleMouseMove = (e: MouseEvent) =>
            throttledUpdateHue.current?.(e.clientX)
        const handleTouchMove = (e: TouchEvent) =>
            throttledUpdateHue.current?.(e.touches[0].clientX)
        const stopDragging = () => setDragging(false)

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', stopDragging)

        window.addEventListener('touchmove', handleTouchMove)
        window.addEventListener('touchend', stopDragging)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseup', stopDragging)

            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('touchend', stopDragging)
        }
    }, [dragging])

    return (
        <div className='m-auto flex w-full max-w-sm flex-col gap-6 md:m-0'>
            <div className='flex-between relative'>
                <p className='font-default z-1 text-5xl font-bold tracking-wider dark:text-white'>
                    IF &ensp;NOT
                </p>
                <div className='flex-between group absolute right-0 gap-4'>
                    {colorMap.map((color, index) => (
                        <div
                            key={index}
                            style={{ filter: filterStyle }}
                            className={cx(
                                'hidden size-14 rounded-tr-full sm:block',
                                color,
                                index === 3 && 'inset-shadow-btn_active',
                            )}
                        >
                            {index === 3 && (
                                <p
                                    className={cx(
                                        'translate-x-1/6 translate-y-2/3 transform',
                                        'font-code text-xl font-bold text-black',
                                    )}
                                >
                                    if
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex-between gap-6 font-bold'>
                <div
                    style={{ filter: filterStyle }}
                    className='bg-coral font-code inset-shadow-btn_active hover:inset-shadow-btn_default flex-center h-12 w-2/3 rounded-lg text-lg text-black'
                >
                    <p className='font-code'>{'(!calm) {'}</p>
                </div>
                <p className='font-default text-5xl tracking-wider dark:text-white'>
                    CALM
                </p>
            </div>

            <div
                style={{ filter: filterStyle }}
                className='font-default border-pink shadow-pink rounded-full border p-4 text-center text-4xl font-bold tracking-widest dark:text-white'
            >
                <p className='text-shadow-pink'>KEEP CALM</p>
            </div>

            <div className='relative flex items-center font-bold'>
                <p
                    style={{ filter: filterStyle }}
                    className='bg-canary hover:shadow-canary font-code inset-shadow-btn_default flex-center h-10 w-10 rounded-full text-lg text-black sm:w-1/3'
                >
                    {'}'}
                </p>
                <p className='font-default text-5xl tracking-wider dark:text-white'>
                    {' '}
                    &ensp; ; ELSE
                </p>
                <p
                    style={{ filter: filterStyle }}
                    className='bg-pink hover:shadow-pink font-code inset-shadow-btn_default vertical-rl flex-center absolute top-1 right-1 h-24 w-12 rounded-full text-black'
                >
                    {'else {'}
                </p>
            </div>
            <div className='flex-between'>
                <p className='font-hand text-5xl sm:tracking-widest dark:text-white'>
                    CODE ON;
                </p>
            </div>
            <div className='relative'>
                <Button
                    onMouseDown={() => setDragging(true)}
                    onTouchStart={() => setDragging(true)}
                    style={{ left: leftDistance, filter: filterStyle }}
                    className='bg-canary hover:shadow-canary font-code absolute -top-5 z-1 size-10 rounded-full text-lg font-bold text-black'
                >
                    {'}'}
                </Button>
                <div
                    style={{ filter: filterStyle }}
                    ref={barRef}
                    className='border-blue h-1.5 border-y-1'
                ></div>
            </div>
        </div>
    )
}
