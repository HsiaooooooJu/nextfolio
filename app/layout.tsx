import { Metadata } from 'next'
import './globals.css'
import cx from 'clsx'
import ModeProvider from './context/mode_context'
import { gochiHand, poppins, sourceCode } from './ui/fonts'
import { Navbar } from './ui'

export const metadata: Metadata = {
    title: {
        template: '%s | Nextfolio',
        default: 'Nextfolio',
    },
    description: 'Keep calm and code on.',
    metadataBase: new URL('https://nextfolio-xi-ten.vercel.app/'),
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='zh-tw' suppressHydrationWarning>
            <head>
                <script
                    id='checkMode'
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function () {
                            try {
                                const mode = localStorage.getItem('mode')
                                const system = window.matchMedia('(prefers-color-scheme: dark)').matches
                                    ? 'dark'
                                    : 'light'
                                document.documentElement.classList.add(mode || system || 'dark')
                            } catch (_) {}
                        })()`,
                    }}
                />
            </head>
            <body
                className={cx(
                    gochiHand.variable,
                    poppins.variable,
                    sourceCode.variable,
                    'antialiased',
                )}
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
