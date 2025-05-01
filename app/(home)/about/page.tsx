import getStartDay from '../../utils/getStartDay'
import CodeBox from '../../ui/CodeBox'
import cx from 'clsx'

export default function About() {
    const start = getStartDay(new Date('2022/02/04'))
    const now = getStartDay(new Date())
    const msPerDay = 1000 * 60 * 60 * 24
    const days = Math.floor((now - start) / msPerDay)

    return (
        <div className='font-code flex flex-col justify-between gap-6 sm:flex-row'>
            <div
                className={cx(
                    'relative mx-auto w-80 max-w-md sm:w-full overflow-hidden',
                    'inset-shadow-t-dark rounded-xl bg-neutral-700',
                    'text-lg font-medium text-white',
                )}
            >
                <CodeBox
                    language='javascript'
                    code={
                        `(function repeat() {
  sleep();
  eat();
  code();
  // repeat();
})();`}
                />
            </div>
            <div className='m-auto w-84 max-w-md sm:w-full'>
                <div className='inset-shadow-t-light h-12 w-full rounded-t-xl bg-zinc-800 px-4 pt-3'>
                    <div className='bg-canary inset-shadow-btn_active size-6 rounded-full'></div>
                </div>
                <div className='inset-shadow-b-dark h-54 w-full rounded-b-xl bg-neutral-300 p-5 text-black'>
                    <CodeBox
                        language='html'
                        code={`<h1> 💻 Daily Dev Life </h1>`}
                        className='text-lg leading-12 font-bold'
                    />
                    <CodeBox
                        language='html'
                        code={`<p id="sleep">╰(*°▽°*)╯</p>
<p id="eat"> 🍔🍟🍿 </p>
<p id="code">Days: ${days}</p>`}
                    />
                    <p className='text-4xl'>∞</p>
                </div>
            </div>
        </div>
    )
}
