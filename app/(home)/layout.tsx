import Menu from '../components/Menu'

export default function HomeLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Menu />
            {children}
        </>
    )
}
