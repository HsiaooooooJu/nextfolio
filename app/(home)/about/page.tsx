import { Metadata } from 'next'
import { getStartDay } from '../../utils'
import { CodeBox } from '../../components'
import GuessNumGame from './GuessNumGame'
import { Accordion } from '../../ui'

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
        <div className='slide_left mb-8 flex flex-col-reverse justify-between gap-6 lg:flex-row'>
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
                <GuessNumGame />
                <Accordion title='How to play'>
                    <div className='space-y-2 px-8 font-medium'>
                        <p>
                            For each guess, you will get feedback in the format&ensp;
                            <b className='text-pink'>_</b>A
                            <b className='text-pink'>_</b>
                            B, where:
                        </p>
                        <div className='space-y-1'>
                            <p className='flex'>
                                <span className='text-coral mr-1'>A:</span>
                                numbers that&apos;re correct and in the correct
                                position.
                            </p>
                            <p className='flex'>
                                <span className='text-coral mr-1'>B:</span>
                                numbers that&apos;re correct but in the wrong
                                position.
                            </p>
                        </div>
                    </div>
                </Accordion>
            </div>
        </div>
    )
}
