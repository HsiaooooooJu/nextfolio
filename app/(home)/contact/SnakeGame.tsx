'use client'

import { useState, useEffect, useCallback } from 'react'
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
const speed = 250
const formatScore = (num: number) => {
    return num.toString().padStart(3, '0')
}

export default function SnakeGame() {
    const [snake, setSnake] = useState(originSnake)
    const [direction, setDirection] = useState<DirectionType>('right')
    const [start, setStart] = useState(false)
    const [score, setScore] = useState<string>('000')
    const [highScore, setHighScore] = useState<string>('000')
    const [food, setFood] = useState<PositionType>()
    const [delay, setDelay] = useState<number>(speed)

    const generateFood = () => {
        let newFood: PositionType
        do {
            newFood = { x: getNum(gridSize) + 1, y: getNum(gridSize) + 1 }
        } while (snake.some((part) => part.x === newFood.x || part.y === newFood.y))
        {
            return newFood
        }
    }

    const move = useCallback(() => {
        setSnake((prevSnake) => {
            const head = { ...prevSnake[0] }

            switch (direction) {
                case 'up':
                    head.y -= 1
                    break
                case 'down':
                    head.y += 1
                    break
                case 'left':
                    head.x -= 1
                    break
                case 'right':
                    head.x += 1
                    break
            }

            const hitWall =
                head.x > gridSize || head.x < 1 || head.y > gridSize || head.y < 1
            const hitSelf = prevSnake.some(
                (part) => part.x === head.x && part.y === head.y,
            )

            if (head.x === food?.x && head.y === food?.y) {
                setFood(generateFood())
                setDelay(() => {
                    if (delay > 200) return delay - 15
                    if (delay > 150) return delay - 10
                    if (delay > 100) return delay - 5
                    if (delay > 50) return delay - 1
                    return Math.max(delay - 1, 10)
                })
                const newScore = formatScore(parseInt(score) + 1)
                setScore(newScore)
                return [head, ...prevSnake]
            }

            if (hitWall || hitSelf) {
                resetGame()
                return originSnake
            }

            return [head, ...prevSnake.slice(0, -1)]
        })
    }, [direction])

    const resetGame = () => {
        setHighScore((prev) => {
            if (parseInt(score) > parseInt(prev)) {
                localStorage.setItem('highScore', score)
                return score
            }
            return prev
        })
        setStart(false)
        setScore('000')
    }

    const startGame = () => {
        setSnake(originSnake)
        setDirection('right')
        setScore('000')
        setDelay(speed)
        setFood(generateFood())
        setStart(true)
    }

    useEffect(() => {
        const stored = localStorage.getItem('highScore')
        if (stored) setHighScore(stored)
    }, [])

    useEffect(() => {
        if (!start) return
        const interval = setInterval(() => {
            move()
        }, delay)

        return () => {
            clearInterval(interval)
        }
    }, [start, delay, move])

    useEffect(() => {
        const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
        const handleKeyPress = (e: KeyboardEvent) => {
            if (arrowKeys.includes(e.key)) {
                e.preventDefault() // prevent page scroll

                switch (e.key) {
                    case 'ArrowUp':
                        setDirection((prev) => (prev !== 'down' ? 'up' : prev))
                        break
                    case 'ArrowDown':
                        setDirection((prev) => (prev !== 'up' ? 'down' : prev))
                        break
                    case 'ArrowLeft':
                        setDirection((prev) => (prev !== 'right' ? 'left' : prev))
                        break
                    case 'ArrowRight':
                        setDirection((prev) => (prev !== 'left' ? 'right' : prev))
                        break
                }
            }
        }
        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [])

    return (
        <>
            <div className='xs:w-96 mx-auto my-4 w-72'>
                <div
                    className={cx(
                        'flex-between xs:px-4 h-12 w-full px-2 pt-2',
                        'bg-blue font-code xs:text-xl rounded-t-xl text-base font-bold',
                    )}
                >
                    <span>score:&ensp;{score}</span>
                    <span>high score:&ensp;{highScore}</span>
                </div>
                <div
                    className={cx(
                        'relative aspect-square w-full',
                        'grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]',
                        'border-blue rounded-b-xl border-x-6 border-b-6 bg-black',
                    )}
                >
                    {start ? (
                        <>
                            {snake.map((item, index) => (
                                <div
                                    key={index}
                                    style={{ gridColumn: item.x, gridRow: item.y }}
                                    className='bg-canary border border-black/10'
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
            </div>
        </>
    )
}
