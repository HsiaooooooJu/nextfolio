import Menu from '../ui/Menu'

export default function HomeLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='mx-auto max-w-4xl'>
            <Menu />
            {children}
        </div>
    )
}
