import cx from 'clsx'

export default function RoadSign() {
    const stickStyle = 'bg-white inset-shadow-btn_default'
    const signStyle =
        'rounded-full leading-12 text-center h-12 text-2xl font-hand text-black inset-shadow-btn_default'

    return (
        <div className='relative m-auto flex w-72 flex-col items-center'>
            <div className='flex-between relative flex-col'>
                <div
                    className={cx(
                        'z-10 size-5 translate-y-5 rounded-full',
                        stickStyle,
                    )}
                ></div>
                <div className={cx('z-1 h-84 w-2 translate-y-4', stickStyle)}></div>
                <div className={cx('h-10 w-36 rounded-[50%]', stickStyle)}></div>
            </div>
            <div className='absolute top-18 z-10 flex flex-col items-center gap-12 tracking-widest'>
                <div className={cx('bg-canary w-56', signStyle)}>About</div>
                <div className={cx('bg-pink w-68 rotate-5', signStyle)}>Project</div>
                <div className={cx('bg-blue w-48 -rotate-5', signStyle)}>
                    Contact
                </div>
            </div>
        </div>
    )
}
