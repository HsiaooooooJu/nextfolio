'use client'

import { useState } from 'react'
import getStartDay from '../../utils/getStartDay'
import CodeBox from '../../ui/CodeBox'
import cx from 'clsx'
import Button from '../../ui/Button'

export default function About() {
    const [isStart, setIsStart] = useState<boolean>(false)
    const gameStart = () => {
        return setIsStart(true)
    }

    const start = getStartDay(new Date('2022/02/04'))
    const now = getStartDay(new Date())
    const msPerDay = 1000 * 60 * 60 * 24
    const days = Math.floor((now - start) / msPerDay)
    const width = 'mx-auto w-11/12 max-w-lg md:w-full'

    return (
        <div className='flex flex-col justify-between gap-6 lg:flex-row'>
            <div
                className={cx('relative overflow-hidden rounded-xl text-xl', width)}
            >
                <CodeBox
                    language='javascript'
                    code={`(function repeat() {
  sleep();
  eat();
  code();
  // repeat();
})();`}
                />

                <br />
                <CodeBox
                    language='html'
                    code={`<p id="sleep"> ╰(*°▽°*)╯ </p>
<p id="eat"> 🍔🍟🍿 </p>
<p id="code"> Days: ${days} </p>`}
                />
            </div>
            <p className='mt-6 text-center text-4xl'>∞</p>
            <div className={width}>
                <div
                    className={cx(
                        'inset-shadow-t-light flex h-12 w-full items-center gap-4 rounded-t-xl px-4',
                        isStart ? 'bg-pink' : 'bg-zinc-800',
                    )}
                >
                    <div
                        className={cx(
                            'size-5 rounded-full tracking-wider',
                            isStart
                                ? 'bg-canary inset-shadow-btn_active'
                                : 'bg-pink inset-shadow-btn_default',
                        )}
                    ></div>
                    <span className='font-hand align-bottom text-2xl text-white'>
                        2A1B
                    </span>
                </div>
                <div className='font-hand inset-shadow-b-dark mx-auto w-full rounded-b-xl bg-neutral-300 p-5 text-center tracking-wider text-black'>
                    <p className='mb-2 text-xl'>Guess the secret 4-digit number.</p>
                    <p className='bg-canary rounded-full px-5 py-3 text-lg leading-6'>
                        You only have 12 chances to guess the secret number. Use your
                        guesses wisely!
                    </p>
                    <Button
                        onClick={gameStart}
                        className='bg-blue mt-4 rounded-full px-4 py-2 text-lg'
                    >
                        Game Start
                    </Button>
                </div>
            </div>
        </div>
    )
}
