import { Metadata } from 'next'
import { LandingDeco, Menu, RoadSign} from './components'

export const metadata: Metadata = {
    title: {
        template: '%s | Nextfolio',
        default: 'Nextfolio',
    },
    description: 'Keep calm and code on.',
    metadataBase: new URL('https://nextfolio-xi-ten.vercel.app/'),
}

export default function Home() {
    return (
        <>
            <div className='block md:hidden'>
                <Menu />
            </div>
            <div className='mx-auto flex max-w-4xl md:mt-32 md:justify-between'>
                <div className='hidden md:block'>
                    <RoadSign />
                </div>
                <LandingDeco />
            </div>
        </>
    )
}
