import { Metadata } from 'next'
import { Profile, SnakeGame } from './index'

export const metadata: Metadata = {
    title: 'Contact',
}

export default function Contact() {
    return (
        <div className='mb-10 flex flex-col justify-between gap-6 sm:px-4 lg:flex-row'>
            <Profile />
            <SnakeGame />
        </div>
    )
}
