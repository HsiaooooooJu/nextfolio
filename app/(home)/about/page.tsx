'use client'

import { useState, useRef } from 'react'
import { getStartDay, generateAnswer } from '../../utils/'
import CodeBox from '../../ui/CodeBox'
import cx from 'clsx'
import Button from '../../ui/Button'
import Input from '../../ui/Input'

export default function About() {
    const [isStart, setIsStart] = useState<boolean>(false)
    const [guessList, setGuessList] = useState<number[]>([])
    const [answer, setAnswer] = useState<number[]>([])
    console.log('🚀 - About - answer:', answer)
    const inputRef = useRef<HTMLInputElement>(null)
    let A = 0
    let B = 0

    const start = getStartDay(new Date('2022/02/04'))
    const now = getStartDay(new Date())
    const msPerDay = 1000 * 60 * 60 * 24
    const days = Math.floor((now - start) / msPerDay)

    const width = 'mx-auto w-11/12 max-w-lg md:w-full'

    const gameStart = () => {
        setAnswer(generateAnswer())
        setIsStart(true)
    }

    const handleSubmit = () => {
        console.log('inputRef', typeof inputRef.current?.value) // string
        const value = inputRef.current?.value.split('')
        if (!value) return

        value.forEach((num, i) => {
            if (Number(num) === answer[i]) {
                A++
            } else if (answer.includes(Number(num))) {
                B++
            }
        })
    }

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
            <div className={cx('flex flex-col', width)}>
                <div
                    className={cx(
                        'inset-shadow-t-light flex h-12 w-full items-center gap-4 rounded-t-xl px-4',
                        isStart ? 'bg-pink' : 'bg-zinc-800',
                    )}
                >
                    <div
                        className={cx(
                            'size-5 rounded-full tracking-wider transition-colors duration-500 ease-in-out',
                            isStart
                                ? 'bg-canary inset-shadow-btn_active'
                                : 'bg-pink inset-shadow-btn_default',
                        )}
                    ></div>
                    <span className='font-hand align-bottom text-2xl text-white'>
                        2A1B
                    </span>
                </div>
                <div className='font-hand inset-shadow-b-dark mx-auto flex w-full flex-1 flex-col rounded-b-xl bg-neutral-300 p-5 text-center tracking-wider text-black'>
                    <div>
                        <p className='mb-2 text-xl'>
                            Guess the secret 4-digit number.
                        </p>
                        <p className='bg-canary rounded-full px-5 py-3 text-lg leading-6'>
                            You only have 12 chances to guess the secret number. Use
                            your guesses wisely!
                        </p>
                    </div>
                    {isStart ? (
                        <div className='mx-4 mt-5 flex gap-5 text-xl'>
                            <Input
                                ref={inputRef}
                                className='w-1/2 rounded-full bg-white px-4 text-center tracking-widest placeholder:text-stone-300 focus:placeholder-transparent'
                                placeholder='ex: 1234'
                            />
                            <Button
                                onClick={handleSubmit}
                                className='bg-coral hover:text-shadow-hover w-1/2 rounded-full px-6 py-3 hover:shadow-white'
                            >
                                Submit
                            </Button>
                        </div>
                    ) : (
                        <Button
                            onClick={gameStart}
                            className='bg-blue hover:text-shadow-hover m-auto rounded-full px-6 py-3 text-xl hover:shadow-white'
                        >
                            Game Start
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
