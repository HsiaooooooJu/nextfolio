import './globals.css'
import cx from 'clsx'
import { gochiHand, poppins } from './ui/fonts'
import { Navbar } from './ui'
import ModeProvider from './context/mode_context'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='zh-tw' className='dark'>
            <body
                className={cx(gochiHand.variable, poppins.variable, 'antialiased')}
            >
                <ModeProvider>
                    <main className='bg-primary-500 mx-4 mt-6 min-w-80'>
                        <Navbar />
                        <div className='md:px-4'>{children}</div>
                    </main>
                </ModeProvider>
            </body>
        </html>
    )
}
