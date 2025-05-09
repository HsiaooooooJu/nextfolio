'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { useMode } from '../context/mode_context'

export default function Navbar() {
    const { mode, updateMode } = useMode()

    function handleClick() {
        return mode === 'dark' ? updateMode('light') : updateMode('dark')
    }

    return (
        <div className='mx-auto mb-12 flex w-full max-w-5xl items-center justify-between'>
            <Link href='/'>
                <Image
                    src='/assets/egg.svg'
                    width='60'
                    height='60'
                    alt='egg'
                    priority
                />
            </Link>
            <Button noShadow onClick={handleClick}>
                {mode === 'dark' ? (
                    <Image
                        src='/assets/moon.svg'
                        width='50'
                        height='50'
                        alt='moon'
                    />
                ) : (
                    <div className='text-white'>SUN</div>
                )}
            </Button>
        </div>
    )
}
