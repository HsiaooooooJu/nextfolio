import cx from 'clsx'

export type GuessType = {
    guess: string
    hint: string
}

interface GuessListProps {
    list: GuessType[]
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
                <div className='flex justify-end gap-1 tracking-wider' key={index}>
                    <span className='text-right text-stone-500'>{index + 1}: </span>
                    <p>
                        <span className='font-bold'>{item.guess}&ensp;</span>
                        <span className='font-medium text-black'>{item.hint}</span>
                    </p>
                </div>
            ))}
        </div>
    )
}
