import cx from 'clsx'

const colorMap = [
    ['bg-blue/25', 'group-hover:bg-pink/25'],
    ['bg-blue/50', 'group-hover:bg-pink/50'],
    ['bg-blue/75', 'group-hover:bg-pink/75'],
    ['bg-blue', 'group-hover:bg-pink'],
]

export default function QuarterRound({ filter }: { filter: string }) {
    return (
        <div className='flex-between group absolute right-0 gap-4'>
            {colorMap.map((color, index) => {
                const isFourth = index === 3
                return (
                    <div
                        key={index}
                        style={{ filter }}
                        className={cx(
                            'size-14 rounded-tr-full sm:block',
                            color,
                            isFourth ? 'inset-shadow-btn_active' : 'hidden',
                        )}
                    >
                        {isFourth && (
                            <p
                                className={cx(
                                    'translate-x-1/6 translate-y-2/3 transform',
                                    'font-code cursor-grabbing text-xl font-bold text-black text-shadow-white',
                                )}
                            >
                                if
                            </p>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
