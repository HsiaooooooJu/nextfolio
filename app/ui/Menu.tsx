import MenuItem from './MenuItem'

export default function Menu() {
    return (
        <div className='justify-center flex xs:justify-start gap-6 pb-14'>
            <MenuItem
                href='/about'
                text='About'
                bgColor='bg-canary'
                hoverEffectColor='hover:shadow-canary'
                iconName='about'
                iconWidth={6}
                iconHeight={25}
            />
            <MenuItem
                href='/project'
                text='Project'
                bgColor='bg-pink'
                hoverEffectColor='hover:shadow-pink'
                iconName='project'
                iconWidth={22}
                iconHeight={25}
            />
            <MenuItem
                href='/contact'
                text='Contact'
                bgColor='bg-blue'
                hoverEffectColor='hover:shadow-blue'
                iconName='contact'
                iconWidth={22}
                iconHeight={25}
                iconClassName='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-2/5 transform'
            />
        </div>
    )
}
