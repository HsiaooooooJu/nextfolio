'use client'

import Link from 'next/link'
import Button from './Button'
import { Moon, Egg } from '../icons'
import { useMode } from '../context/mode_context'

export default function Navbar() {
    const { mode, updateMode } = useMode()
    const isDark = mode === 'dark'

    function handleClick() {
        return isDark ? updateMode('light') : updateMode('dark')
    }

    return (
        <div className='mx-auto mb-10 flex max-w-5xl items-center justify-between'>
            <Link href='/'>
                <Egg size='size-15' />
            </Link>
            <Button noShadow onClick={handleClick} className='cursor-pointer'>
                <Moon
                    color='canary'
                    size='size-14'
                    stroke='canary'
                    strokeWidth={2}
                    strokeDasharray='1,4,1,4'
                    strokeLinecap='round'
                    isFilled={isDark}
                />
            </Button>
        </div>
    )
}
