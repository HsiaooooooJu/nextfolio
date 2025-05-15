import { Metadata } from 'next'
import { getStartDay } from '../../utils'
import { CodeBox } from '../../components'
import { Instruction, Game } from './index'

export const metadata: Metadata = {
    title: 'Project',
}

const updateDays = (): number => {
    const start = getStartDay(new Date('2022/02/04'))
    const now = getStartDay(new Date())
    const msPerDay = 1000 * 60 * 60 * 24
    return Math.floor((now - start) / msPerDay)
}

export default function About() {
    const days = updateDays()

    return (
        <div className='mb-8 flex flex-col-reverse justify-between gap-6 lg:flex-row'>
            <div className='relative mx-auto w-11/12 max-w-lg overflow-hidden rounded-xl text-xl md:w-full'>
                <CodeBox
                    language='javascript'
                    code={`(function repeat() {
  sleep();
  eat();
  code();
  // repeat();
})();`}
                />

                <br />
                <CodeBox
                    language='html'
                    code={`<p id="sleep"> ╰(*°▽°*)╯ </p>
<p id="eat"> 🍔🍟🍿 </p>
<p id="code"> Days: ${days} </p>`}
                />
            </div>
            <p className='hidden text-center text-4xl md:block'>∞</p>
            <div className='mx-auto flex w-11/12 max-w-lg flex-col md:w-full'>
                <Game />
                <Instruction />
            </div>
        </div>
    )
}
