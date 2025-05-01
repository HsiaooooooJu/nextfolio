import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='mx-auto mb-12 flex w-full max-w-5xl items-center justify-between'>
            <Link href='/'>
                <Image src='/assets/egg.svg' width='60' height='60' alt='egg' />
            </Link>
            <Image src='/assets/moon.svg' width='50' height='50' alt='moon' />
        </div>
    )
}
