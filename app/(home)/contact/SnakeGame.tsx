'use client'

import { useState } from 'react'

export default function SnakeGame() {
    const score = 100
    return (
        <div className='border-blue m-4 aspect-square size-1/2 rounded-lg border-4'>
            <div className='bg-blue flex-between h-16 w-full px-2'>
                <span className='font-code text-xl font-bold'>
                    score:&ensp;{score}
                </span>
                <span className='font-code text-xl font-bold'>
                    highest score:&ensp;{score}
                </span>
            </div>
        </div>
    )
}
