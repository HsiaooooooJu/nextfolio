'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useThrottle } from '../hooks'
import { Button, Lightbox } from '../ui'
import QuarterRound from './QuarterRound'

import cx from 'clsx'

const maxBarRatio = 87.5

export default function LandingDeco() {
    const [openLightboxId, setOpenLightboxId] = useState<'uno' | 'devProd' | null>()
    const [hue, setHue] = useState(360)
    const [dragging, setDragging] = useState(false)
    const barRef = useRef<HTMLDivElement>(null)
    const left = `${(hue / 360) * maxBarRatio}%`
    const filter = `hue-rotate(${hue}deg)`

    const throttledUpdateHue = useThrottle((x: number) => {
        if (!barRef.current) return
        const { left, width } = barRef.current.getBoundingClientRect()
        const moveSlider = Math.round(((x - left) / width) * 360)
        setHue(Math.min(Math.max(moveSlider, 0), 360))
    }, 16)

    useEffect(() => {
        if (!dragging) return

        const handleMouseMove = (e: MouseEvent) => throttledUpdateHue(e.clientX)
        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault()
            throttledUpdateHue(e.touches[0].clientX)
        }
        const stopDragging = () => setDragging(false)

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', stopDragging)

        window.addEventListener('touchmove', handleTouchMove, { passive: false })
        window.addEventListener('touchend', stopDragging)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseup', stopDragging)

            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('touchend', stopDragging)
        }
    }, [dragging, throttledUpdateHue])

    return (
        <div className='m-auto flex w-full max-w-sm flex-col gap-6 md:m-0'>
            <div className='flex-between relative'>
                <p className='font-default z-1 text-5xl font-bold tracking-wider dark:text-white'>
                    IF &ensp;NOT
                </p>
                <QuarterRound filter={filter} />
            </div>

            <div className='flex-between gap-6 font-bold'>
                <Button
                    style={{ filter }}
                    className='bg-coral font-code flex-center h-12 w-2/3 rounded-lg text-lg text-black text-shadow-white'
                    isActive
                >
                    {'(!calm) {'}
                </Button>
                <p className='font-default text-5xl tracking-wider dark:text-white'>
                    CALM
                </p>
            </div>

            <div
                style={{ filter }}
                className='font-default border-pink shadow-pink rounded-full border p-4 text-center text-4xl font-bold tracking-widest dark:text-white'
            >
                <p className='text-shadow-pink'>KEEP CALM</p>
            </div>

            <div className='relative flex items-center font-bold'>
                <Button
                    style={{ filter }}
                    onClick={() => setOpenLightboxId('uno')}
                    className='bg-canary hover:shadow-canary font-code flex-center h-10 w-10 rounded-full text-lg text-black sm:w-1/3'
                >
                    {'}'}
                </Button>
                <p className='font-default text-5xl tracking-wider dark:text-white'>
                    {' '}
                    &ensp; ; ELSE
                </p>
                <Button
                    style={{ filter }}
                    onClick={() => setOpenLightboxId('devProd')}
                    className='bg-pink hover:shadow-pink font-code inset-shadow-btn_default vertical-rl flex-center absolute top-1 right-1 h-24 w-12 rounded-full text-black'
                >
                    {'else {'}
                </Button>
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
                    style={{ left, filter }}
                    className='bg-canary hover:shadow-canary font-code absolute -top-5 z-1 size-10 rounded-full text-lg font-bold text-black'
                >
                    {'}'}
                </Button>
                <div
                    style={{ filter }}
                    ref={barRef}
                    className='border-blue h-1.5 border-y-1'
                ></div>
            </div>
            <Lightbox
                isOpen={openLightboxId === 'uno'}
                className='flex-center flex-col gap-5 bg-black'
            >
                <Image
                    src='/images/meme_uno.jpg'
                    width={360}
                    height={240}
                    alt='meme uno'
                    className='rounded-lg'
                />
                <Button
                    onClick={() => setOpenLightboxId(null)}
                    style={{ filter }}
                    className='bg-canary font-hand hover:shadow-canary rounded-full px-6 py-2 tracking-wider text-black'
                >
                    Close
                </Button>
            </Lightbox>
            <Lightbox
                isOpen={openLightboxId === 'devProd'}
                className='flex-center flex-col gap-5'
            >
                <Image
                    src='/images/meme_devProd.jpg'
                    width={360}
                    height={240}
                    alt='meme production crash'
                    className='rounded-lg bg-white py-2'
                />
                <Button
                    onClick={() => setOpenLightboxId(null)}
                    style={{ filter }}
                    className='bg-pink font-hand hover:shadow-pink rounded-full px-6 py-2 tracking-wider text-black'
                >
                    Close
                </Button>
            </Lightbox>
        </div>
    )
}
