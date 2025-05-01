import Menu from '../ui/Menu'

export default function HomeLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='max-w-4xl mx-auto'>
            <Menu />
            {children}
        </div>
    )
}
