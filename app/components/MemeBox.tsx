import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { Button, Lightbox } from '../ui'
import cx from 'clsx'

interface PropsType {
    filter: string
    openBoxId: 'uno' | 'devProd' | 'calm' | null
    setOpenBoxId: Dispatch<SetStateAction<'uno' | 'devProd' | 'calm' | null>>
}

const memeData = [
    {
        id: 'uno',
        src: '/images/meme_uno.jpg',
        width: 360,
        height: 240,
        alt: 'meme uno',
        buttonClass: 'bg-canary hover:shadow-canary',
        imageClass: 'rounded-lg',
    },
    {
        id: 'devProd',
        src: '/images/meme_devProd.jpg',
        width: 360,
        height: 240,
        alt: 'meme production crash',
        buttonClass: 'bg-pink hover:shadow-pink',
        imageClass: 'rounded-lg bg-white py-2',
    },
    {
        id: 'calm',
        src: '/images/meme_calm.jpg',
        width: 360,
        height: 300,
        alt: 'meme calm',
        buttonClass: 'bg-coral hover:shadow-coral',
        imageClass: 'rounded-2xl',
    },
] as const

export default function MemeBox({ filter, openBoxId, setOpenBoxId }: PropsType) {
    return (
        <>
            {memeData.map(
                ({ id, src, width, height, alt, buttonClass, imageClass }) => (
                    <Lightbox
                        key={id}
                        isOpen={id === openBoxId}
                        className='flex-center flex-col gap-5'
                    >
                        <Image
                            src={src}
                            width={width}
                            height={height}
                            alt={alt}
                            className={imageClass}
                        />
                        <Button
                            onClick={() => setOpenBoxId(null)}
                            style={{ filter }}
                            className={cx(
                                'font-hand rounded-full px-6 py-2 tracking-wider text-black',
                                buttonClass,
                            )}
                        >
                            Close
                        </Button>
                    </Lightbox>
                ),
            )}
        </>
    )
}
