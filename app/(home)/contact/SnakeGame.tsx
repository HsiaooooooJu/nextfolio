'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '../../ui'
import { getNum } from '../../utils'
import cx from 'clsx'

type DirectionType = 'up' | 'down' | 'left' | 'right'
type PositionType = { x: number; y: number }

const gridSize = 20
const originSnake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
]
const originSpeed = 250

export default function Practice() {
    const [start, setStart] = useState(false)
    const [snake, setSnake] = useState(originSnake)
    const [food, setFood] = useState<PositionType>()
    const [direction, setDirection] = useState<DirectionType>('right')
    const [score, setScore] = useState<string>('000')
    const [highScore, setHighScore] = useState<string>('000')
    const [delay, setDelay] = useState<number>(originSpeed)

    const snakeRef = useRef<PositionType[]>(originSnake)

    const startGame = () => {
        setStart(true)
        setSnake(originSnake)
        setFood(generateFood(originSnake))
        setDirection('right')
        setScore('000')
        setDelay(originSpeed)
    }

    useEffect(() => {
        const stored = localStorage.getItem('highScore')
        if (stored) setHighScore(stored)
        snakeRef.current = snake
    }, [snake])

    useEffect(() => {
        if (!start || !food) return

        const intervalId = setInterval(() => {
            const currentSnake = snakeRef.current
            const head = moveSnake(currentSnake, direction)

            if (hasEat(head, food)) {
                setSnake((prev) => [head, ...prev])
                setDelay((prev) => prev - 5)
                setFood(generateFood(currentSnake))
                setScore((prev) => formatScore(parseInt(prev) + 1))
            } else {
                setSnake((prev) => [head, ...prev.slice(0, -1)])
            }

            if (isCrash([head, ...currentSnake])) {
                const newScore = snakeRef.current.length - originSnake.length
                const newHighScore = Math.max(newScore, parseInt(highScore))
                setHighScore(formatScore(newHighScore))
                setSnake(originSnake)
                setDelay(originSpeed)
                setStart(false)
                localStorage.setItem('highScore', score)
            }
        }, delay)
        return () => clearInterval(intervalId)
    }, [delay, direction, highScore, food, start, score])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const newDirection = handleKeyPress(e, direction)
            if (newDirection) {
                setDirection(newDirection)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [direction])

    return (
        <>
            <div className='xs:w-96 mx-auto my-4 w-72 text-white'>
                <div
                    className={cx(
                        'xs:px-4 flex h-20 w-full flex-col justify-between px-2 pt-2',
                        'bg-blue font-code xs:text-xl rounded-t-xl text-base font-bold',
                    )}
                >
                    <p className='text-2xl tracking-wider'>Snake Game</p>
                    <div className='flex-between mb-2 w-full'>
                        <p>score:&ensp;{score}</p>
                        <p>high score:&ensp;{highScore}</p>
                    </div>
                </div>
                <div
                    className={cx(
                        'relative aspect-square w-full',
                        'grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]',
                        'border-blue rounded-b-xl border-x-6 border-b-6 bg-neutral-200 dark:bg-black',
                    )}
                >
                    {start ? (
                        <>
                            {snake.map((item, index) => (
                                <div
                                    key={index}
                                    style={{ gridColumn: item.x, gridRow: item.y }}
                                    className='bg-canary border border-neutral-200/50 dark:border-black/10'
                                ></div>
                            ))}
                            {food && (
                                <div
                                    style={{ gridColumn: food.x, gridRow: food.y }}
                                    className='bg-pink rounded-full'
                                ></div>
                            )}
                        </>
                    ) : (
                        <Button
                            className={cx(
                                'center h-12 w-32',
                                'font-hand rounded-full text-xl',
                                'hover:shadow-pink bg-pink text-black hover:text-shadow-white',
                            )}
                            onClick={startGame}
                        >
                            Game Start
                        </Button>
                    )}
                </div>
                <p className='font-code text-canary mt-3'>
                    Snake game is not available on mobile phone yet. :P
                </p>
            </div>
        </>
    )
}

const formatScore = (num: number) => {
    return num.toString().padStart(3, '0')
}

const handleKeyPress = (event: KeyboardEvent, prev: DirectionType) => {
    const gameKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    event.preventDefault()
    if (gameKeys.includes(event.key)) {
        switch (event.key) {
            case 'ArrowUp':
                return prev !== 'down' ? 'up' : prev
            case 'ArrowDown':
                return prev !== 'up' ? 'down' : prev
            case 'ArrowLeft':
                return prev !== 'right' ? 'left' : prev
            case 'ArrowRight':
                return prev !== 'left' ? 'right' : prev
        }
    }
}

const moveSnake = (snake: PositionType[], direction: DirectionType) => {
    const head = { ...snake[0] }
    switch (direction) {
        case 'up':
            head.y--
            break
        case 'down':
            head.y++
            break
        case 'left':
            head.x--
            break
        case 'right':
            head.x++
            break
    }
    return head
}

const generateFood = (snake: PositionType[]) => {
    let newFood: PositionType
    do {
        newFood = { x: getNum(20) + 1, y: getNum(20) + 1 }
    } while (snake.some((part) => part.x === newFood.x && part.y === newFood.y))
    {
        return newFood
    }
}

const hasEat = (head: PositionType, food: PositionType) => {
    return food?.x === head.x && food?.y === head.y
}

const isCrash = (snake: PositionType[]) => {
    const head = { ...snake[0] }
    const hitWall =
        head.x > gridSize || head.y > gridSize || head.x < 1 || head.y < 1
    const hitSelf = snake
        .slice(1)
        .some((part) => part.x === head.x && part.y === head.y)

    return hitWall || hitSelf
}
