import cx from 'clsx'

export default function LandingDeco() {
    const quarterStyle = 'hidden size-14 rounded-tr-full sm:block'

    return (
        <div className='m-auto flex w-full max-w-sm flex-col gap-6 md:m-0'>
            <div className='flex-between relative'>
                <p className='font-default z-1 text-5xl font-bold tracking-wider text-white'>
                    IF &ensp;NOT
                </p>
                <div className='flex-between absolute right-0 gap-4'>
                    <div className={cx('bg-blue/25', quarterStyle)}></div>
                    <div className={cx('bg-blue/50', quarterStyle)}></div>
                    <div className={cx('bg-blue/75', quarterStyle)}></div>
                    <div className='bg-blue font-code inset-shadow-btn_active hover:inset-shadow-btn_default size-14 rounded-tr-full text-xl font-bold'>
                        <p className='translate-x-1/6 translate-y-2/3 transform text-black'>
                            if
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex-between gap-6 font-bold'>
                <div className='bg-coral font-code inset-shadow-btn_active hover:inset-shadow-btn_default flex-center h-12 w-2/3 rounded-lg text-lg text-black'>
                    <p className='font-code'>{'(!calm) {'}</p>
                </div>
                <p className='font-default text-5xl tracking-wider text-white'>
                    CALM
                </p>
            </div>

            <div className='font-default border-pink shadow-pink rounded-full border p-4 text-center text-4xl font-bold tracking-widest text-white'>
                KEEP CALM
            </div>

            <div className='relative flex items-center font-bold'>
                <p className='bg-canary hover:shadow-canary font-code inset-shadow-btn_default flex-center h-10 w-10 rounded-full text-lg text-black sm:w-1/3'>
                    {'}'}
                </p>
                <p className='font-default text-5xl tracking-wider text-white'>
                    {' '}
                    &ensp; ; ELSE
                </p>
                <p className='bg-pink hover:shadow-pink font-code inset-shadow-btn_default vertical-rl flex-center absolute top-1 right-1 h-24 w-12 rounded-full text-black'>
                    {'else {'}
                </p>
            </div>
            <div className='flex-between'>
                <p className='font-hand text-5xl text-white sm:tracking-widest'>
                    CODE ON;
                </p>
            </div>
            <div className='relative'>
                <p className='bg-canary hover:shadow-canary font-code inset-shadow-btn_default flex-center absolute -top-8 right-2 size-10 rounded-full text-lg font-bold text-black'>
                    {'}'}
                </p>
                <hr className='border-blue -mt-4 mb-1' />
                <hr className='border-blue' />
            </div>
        </div>
    )
}
