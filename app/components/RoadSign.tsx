import Link from 'next/link'
import cx from 'clsx'

export default function RoadSign() {
    const stickShadow = 'bg-white inset-shadow-btn_default'
    const signStyle =
        'rounded-full leading-12 text-center h-12 text-2xl font-hand text-black inset-shadow-btn_default hover:scale-110'

    return (
        <div className='relative m-auto flex w-72 flex-col items-center'>
            <div className='flex-between relative flex-col'>
                <div className={cx('z-10 size-5 rounded-full', stickShadow)}></div>
                <div
                    className={cx('z-1 h-84 w-2 -translate-y-1', stickShadow)}
                ></div>
                <div
                    className={cx(
                        'h-10 w-36 -translate-y-4 rounded-[50%]',
                        stickShadow,
                    )}
                ></div>
            </div>
            <div className='absolute top-16 z-10 flex flex-col items-center gap-10 tracking-widest'>
                <Link href='/about'>
                    <div
                        className={cx(
                            'bg-canary hover:shadow-canary w-56',
                            signStyle,
                        )}
                    >
                        About
                    </div>
                </Link>
                <Link href='/project'>
                    <div
                        className={cx(
                            'bg-pink hover:shadow-pink w-68 rotate-5',
                            signStyle,
                        )}
                    >
                        Project
                    </div>
                </Link>
                <Link href='/contact'>
                    <div
                        className={cx(
                            'bg-blue hover:shadow-blue w-48 -rotate-5',
                            signStyle,
                        )}
                    >
                        Contact
                    </div>
                </Link>
            </div>
        </div>
    )
}
