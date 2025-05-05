'use client'

import { useState, useRef } from 'react'
import { getStartDay, generateAnswer, getHint } from '../../utils/'
import CodeBox from '../../components/CodeBox'
import cx from 'clsx'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import GuessList from '../../components/GuessList'

type guessType = {
    guess: number
    hint: string
}

const widthClasses = 'mx-auto w-11/12 max-w-lg md:w-full'

export default function About() {
    const [isStart, setIsStart] = useState<boolean>(false)
    const [guessList, setGuessList] = useState<guessType[]>([])
    const [answer, setAnswer] = useState<number[]>([])
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const start = getStartDay(new Date('2022/02/04'))
    const now = getStartDay(new Date())
    const msPerDay = 1000 * 60 * 60 * 24
    const days = Math.floor((now - start) / msPerDay)

    const gameStart = () => {
        const generated = generateAnswer()
        setAnswer(generated)
        setIsStart(true)
        setGuessList([])
        setIsCorrect(false)

        console.log(
            "%c sssh, it's secret: %c" + generated.join(''),
            'color: #46c8dc; font-weight: bold; font-size: 12px;',
            'color: #fff; font-weight: bold; font-size: 16px;',
        )
    }

    const handleSubmit = () => {
        const input = inputRef.current
        if (!input) return

        const value = input.value.split('')
        if (!value) return

        const hint = getHint(value, answer)
        const guess = Number(value.join(''))

        setGuessList((prev) => [...prev, { guess, hint }])

        input.value = ''

        if (hint === '4A0B') {
            setIsCorrect(true)
        }
    }

    return (
        <div className='mb-8 flex flex-col-reverse justify-between gap-6 lg:flex-row'>
            <div
                className={cx(
                    'relative overflow-hidden rounded-xl text-xl',
                    widthClasses,
                )}
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
            <p className='mt-6 hidden text-center text-4xl md:block'>∞</p>
            <div className={cx('flex flex-col', widthClasses)}>
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
                        <p
                            className={cx(
                                'rounded-3xl px-5 py-3 text-lg leading-6 md:rounded-full',
                                isStart ? 'bg-canary' : 'bg-blue',
                            )}
                        >
                            You only have 12 chances to guess the secret number. Use
                            your guesses wisely!
                        </p>
                    </div>
                    {isStart ? (
                        <>
                            <div className='flex-between mx-4 mt-5 gap-5 text-xl'>
                                <Input
                                    ref={inputRef}
                                    className='w-full rounded-full bg-white px-4 py-3 text-center tracking-widest placeholder:text-stone-300 focus:placeholder-transparent'
                                    placeholder='ex: 1234'
                                    maxLength={4}
                                    type='number'
                                />
                                <Button
                                    onClick={handleSubmit}
                                    className='bg-coral hover:text-shadow-hover w-1/3 rounded-full px-6 py-3 hover:shadow-white md:w-1/2'
                                >
                                    Try!
                                </Button>
                            </div>
                            <GuessList list={guessList} />
                            {isCorrect && (
                                <Button
                                    onClick={gameStart}
                                    className='bg-blue hover:text-shadow-hover inset-shadow-btn_default mx-auto my-2 rounded-full px-6 py-2 text-xl hover:shadow-white'
                                >
                                    Congrats&ensp;🎉🎉🎉
                                </Button>
                            )}
                        </>
                    ) : (
                        <Button
                            onClick={gameStart}
                            className='bg-canary hover:text-shadow-hover mx-auto my-4 rounded-full px-6 py-3 text-xl hover:shadow-white lg:my-auto'
                        >
                            Game Start
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
