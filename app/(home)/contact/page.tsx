import { Metadata } from 'next'
import Profile from './Profile'

export const metadata: Metadata = {
    title: 'Contact',
}

export default function Contact() {
    return (
        <div className='mb-10 flex flex-col justify-between gap-6 px-4 lg:flex-row'>
            <Profile />
        </div>
    )
}
