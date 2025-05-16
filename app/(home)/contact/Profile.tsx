'use client'

import Image from 'next/image'
import { CakeIcon, GithubIcon, MediumIcon } from '../../icons'
import { useMode } from '../../context/mode_context'

export default function Profile() {
    const { mode } = useMode()
    const isDark = mode === 'dark'

    return (
        <section className='font-default mx-auto flex flex-col gap-5 lg:mx-0 lg:w-1/2'>
            <Image
                src='/assets/portrait.png'
                className='mx-auto mt-2 rounded-full md:mt-4 lg:mt-0'
                width='120'
                height='120'
                alt='avatar'
            ></Image>
            <div className='flex-center gap-6'>
                <a href='https://medium.com/@kelllllyko' target='_blank'>
                    <MediumIcon className='w-20' isDark={isDark} />
                </a>
                <a href='https://github.com/HsiaooooooJu' target='_blank'>
                    <GithubIcon size='size-8' isDark={isDark} />
                </a>
                <CakeIcon
                    width='w-20'
                    color={isDark ? 'grey' : 'lightGrey'}
                    className='cursor-not-allowed'
                />
            </div>
            <div className='font-code mx-auto text-center text-lg lg:text-justify'>
                <p>Hi there! I’m HsiaoJu👋👋👋</p>
                <p>
                    A frontend engineer who loves crafting sleek, responsive web apps
                    with React and Tailwind CSS🌈 I’m all about clean code, smooth
                    user experiences, and building things that last. When I’m not
                    coding, I’m probably hunting down the next great cup of coffee ☕
                    or tweaking pixels just for fun🧩(￣∇￣)
                </p>
            </div>
        </section>
    )
}
