import LandingDeco from './components/LandingDeco'
import RoadSign from './components/RoadSign'
import Menu from './ui/Menu'

export default function Home() {
    return (
        <>
            <div className='block md:hidden'>
                <Menu />
            </div>
            <div className='mx-auto flex max-w-4xl md:justify-between'>
                <div className='hidden md:block'>
                    <RoadSign />
                </div>
                <LandingDeco />
            </div>
        </>
    )
}
