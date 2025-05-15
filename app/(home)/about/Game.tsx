'use client'

import { useState, useRef } from 'react'
import cx from 'clsx'

import { generateAnswer, getHint, inputValidation, handleKeyDown } from '../../utils'
import { GuessList, GuessType } from '../../components'
import { Button, Input } from '../../ui'

const CHANCES = 12

export default function Game() {
    const [isStart, setIsStart] = useState<boolean>(false)
    const [guessList, setGuessList] = useState<GuessType[]>([])
    const [answer, setAnswer] = useState<string[]>([])
    const [errMsg, setErrMsg] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const lastGuess = guessList.at(-1)
    const isCorrect = lastGuess?.guess === answer.join('')
    const gameOver = guessList.length >= CHANCES && !isCorrect

    const gameStart = () => {
        const generated = generateAnswer()
        setAnswer(generated)
        setIsStart(true)
        setGuessList([])
        setErrMsg('')

        if (inputRef.current) inputRef.current.value = ''

        console.log(
            "%c sssh, it's secret: %c" + generated.join(''),
            'color: #46c8dc; font-weight: bold; font-size: 12px;',
            'color: #fff; font-weight: bold; font-size: 16px;',
        )
    }

    const handleSubmit = () => {
        setErrMsg('')
        if (gameOver || !inputRef.current) return
        const guess = inputRef.current.value
        const check = inputValidation(guess)

        if (check.code !== 200) {
            setErrMsg(check.message)
            inputRef.current.value = ''
            return
        }

        const hint = getHint(guess.split(''), answer)

        setGuessList((prev) => [...prev, { guess, hint }])
        inputRef.current.value = ''
    }

    return (
        <>
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
                <span className='font-hand align-bottom text-3xl tracking-widest text-white'>
                    2A1B
                </span>
            </div>
            <div className='font-hand inset-shadow-b-dark mx-auto flex min-h-84 w-full flex-col rounded-b-xl bg-neutral-300 p-5 text-center tracking-wider text-black'>
                <div>
                    <p className='mb-2 text-xl'>Guess the secret 4-digit number.</p>
                    <p
                        className={cx(
                            'rounded-3xl px-5 py-3 text-lg leading-6 md:rounded-full',
                            isStart ? 'bg-canary' : 'bg-blue',
                        )}
                    >
                        You only have {CHANCES} chances to guess the secret number.
                        Use your guesses wisely!
                    </p>
                </div>
                {isStart ? (
                    <>
                        <div className='flex-between mx-4 mt-5 gap-5 text-xl'>
                            <Input
                                ref={inputRef}
                                className='w-full rounded-full bg-white px-4 py-3 text-center tracking-widest placeholder:text-stone-300 focus:placeholder-transparent'
                                disabled={isCorrect || gameOver}
                                inputMode='numeric'
                                maxLength={4}
                                onKeyDown={(e) =>
                                    handleKeyDown(e, 'Enter', handleSubmit)
                                }
                                pattern='\d*'
                                placeholder={isCorrect ? '*☆(⊙v⊙)☆*' : 'ex: 1234'}
                                type='text'
                            />
                            {!isCorrect && (
                                <Button
                                    onClick={handleSubmit}
                                    isActive={isCorrect || gameOver}
                                    className={cx(
                                        'w-1/3 rounded-full px-6 py-3 md:w-1/2',
                                        isCorrect || gameOver
                                            ? ''
                                            : 'bg-coral hover:shadow-white hover:text-shadow-white',
                                    )}
                                >
                                    Try!
                                </Button>
                            )}
                        </div>
                        <p
                            className={cx(
                                'font-code mt-2 min-h-2 text-sm font-bold transition-opacity duration-300 ease-in-out',
                                errMsg.length > 0
                                    ? 'text-red-500 opacity-100'
                                    : 'opacity-0',
                            )}
                        >
                            * {errMsg} *
                        </p>
                        <GuessList list={guessList} />
                        {(isCorrect || gameOver) && (
                            <Button
                                onClick={gameStart}
                                className='bg-blue inset-shadow-btn_default mx-auto my-2 rounded-full px-6 py-2 text-xl hover:shadow-white hover:text-shadow-white'
                            >
                                {isCorrect ? (
                                    <>Congrats &ensp;🎉🎉🎉 Play again 😎</>
                                ) : (
                                    <>
                                        Oops! It&apos;s&ensp;
                                        <code className='text-white'>
                                            {answer}
                                        </code>{' '}
                                        😏 Start over?
                                    </>
                                )}
                            </Button>
                        )}
                    </>
                ) : (
                    <Button
                        onClick={gameStart}
                        className='bg-canary mx-auto my-auto rounded-full px-6 py-3 text-xl hover:shadow-white hover:text-shadow-white'
                    >
                        Game Start
                    </Button>
                )}
            </div>
        </>
    )
}
