import cx from 'clsx'

export type guessType = {
    guess: string
    hint: string
}

interface GuessListProps {
    list: guessType[]
    className?: string
}

export default function GuessList({ list, className }: GuessListProps) {
    return (
        <div
            className={cx(
                className ??
                    'font-code mx-auto grid gap-x-6 p-2 text-xl md:grid-cols-2',
            )}
        >
            {list.map((item, index) => (
                <div className='flex gap-1 tracking-wider' key={index}>
                    <span className='text-stone-500'>{index + 1}: </span>
                    <span className='font-bold'>{item.guess}&ensp;</span>
                    <span className='font-medium text-black'>{item.hint}</span>
                </div>
            ))}
        </div>
    )
}
