import { LandingDeco, Menu, RoadSign } from './components'

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
