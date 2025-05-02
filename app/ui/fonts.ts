import { Poppins, Gochi_Hand, Source_Code_Pro } from 'next/font/google'

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '700'],
    style: ['normal', 'italic'],
    variable: '--font-poppins',
})

export const gochiHand = Gochi_Hand({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-gochi-hand',
})

export const sourceCode = Source_Code_Pro({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    style: ['normal'],
    variable: '--font-code',
})
