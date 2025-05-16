'use client'

import { useState } from 'react'
import { useMode } from '../../context/mode_context'
import { GithubIcon } from '../../icons'
import Image from 'next/image'
import throttle from '../../utils/throttle'

interface PropType {
    title: string
    tech: string
    demo: string
    github: string
    image: string
}

export default function ProjectList({ list }: { list: PropType[] }) {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null)
    const { mode } = useMode()
    const isDark = mode === 'dark'

    return (
        <>
            <ul className='font-default flex flex-col gap-16 text-black dark:text-white'>
                {list.map((item: PropType, index: number) => (
                    <li
                        key={index}
                        className='flex flex-col items-center gap-4 md:items-start'
                    >
                        <a
                            rel='noreferrer noopener'
                            href={item.demo}
                            className='hover:text-canary max-w-sm tracking-wider hover:scale-110'
                            onMouseEnter={throttle(() => setHoverIndex(index), 100)}
                            onMouseLeave={() => setHoverIndex(null)}
                            target='_blank'
                        >
                            <h1 className='text-4xl'>{item.title}</h1>
                        </a>
                        <a
                            rel='noreferrer noopener'
                            href={item.github}
                            className='flex-center group hover:text-blue gap-3 hover:scale-110'
                            target='_blank'
                        >
                            <GithubIcon
                                isDark={isDark}
                                hover='group-hover:fill-blue'
                                size='size-6'
                            />
                            <p className='text-lg tracking-wider'>{item.tech}</p>
                        </a>
                    </li>
                ))}
            </ul>
            {hoverIndex !== null && (
                <div className='relative hidden h-72 w-120 md:block'>
                    <Image
                        className='shadow-blue rounded-lg bg-neutral-800 object-cover'
                        src={list[hoverIndex].image}
                        alt={list[hoverIndex].title}
                        fill
                    />
                </div>
            )}
        </>
    )
}
