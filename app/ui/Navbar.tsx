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
        <div className='mx-auto mb-12 flex w-full max-w-5xl items-center justify-between'>
            <Link href='/'>
                <Egg color='canary' size='60px' />
            </Link>
            <Button noShadow onClick={handleClick}>
                <Moon
                    color='canary'
                    size='55px'
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
