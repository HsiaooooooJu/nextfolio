export default function Footer() {
    return (
        <footer className='hidden h-12 w-full overflow-hidden md:block'>
            <Wave />
        </footer>
    )
}

const Wave = () => {
    const fill = '#46C8DC'

    return (
        <div className='animate-wave'>
            <svg
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                width='1280'
                height='69'
                viewBox='0 0 1280 69'
                fill='none'
                preserveAspectRatio='none'
            >
                <path
                    d='M263 0C228.5 0 229.5 28 193.5 28C167.399 28 157.585 5.00002 128 5.00002C98.4151 5.00002 93.5849 35 64 35C34.4151 35 29.5849 5.00002 0 5.00002V69H1280V5.00002C1250.42 5.00002 1245.58 35 1216 35C1186.42 35 1187 3.00002 1152 5.00002C1117 7.00002 1127.5 33 1088 33C1057.5 33 1048.5 8.50002 1021 8.50002C993.5 8.50002 989.585 35 960 35C930.415 35 931 7.00002 896 7.00002C861 7.00002 861.585 35 832 35C802.415 35 797.585 5.00002 768 5.00002C738.415 5.00002 733.585 35 704 35C674.415 35 672.5 2.99978 639 3.9999C605.5 5.00002 605.585 35 576 35C546.415 35 543 12.5 512 12.5C481 12.5 486.5 35 448 35C418.415 35 413.585 5.00002 384 5.00002C354.415 5.00002 353.585 35 324 35C294.415 35 297.5 2.72008e-10 263 0Z'
                    fill={fill}
                />
            </svg>
            <svg
                className='h-full w-full'
                xmlns='http://www.w3.org/2000/svg'
                width='1280'
                height='69'
                viewBox='0 0 1280 69'
                fill='none'
                preserveAspectRatio='none'
            >
                <path
                    d='M263 0C228.5 0 229.5 28 193.5 28C167.399 28 157.585 5.00002 128 5.00002C98.4151 5.00002 93.5849 35 64 35C34.4151 35 29.5849 5.00002 0 5.00002V69H1280V5.00002C1250.42 5.00002 1245.58 35 1216 35C1186.42 35 1187 3.00002 1152 5.00002C1117 7.00002 1127.5 33 1088 33C1057.5 33 1048.5 8.50002 1021 8.50002C993.5 8.50002 989.585 35 960 35C930.415 35 931 7.00002 896 7.00002C861 7.00002 861.585 35 832 35C802.415 35 797.585 5.00002 768 5.00002C738.415 5.00002 733.585 35 704 35C674.415 35 672.5 2.99978 639 3.9999C605.5 5.00002 605.585 35 576 35C546.415 35 543 12.5 512 12.5C481 12.5 486.5 35 448 35C418.415 35 413.585 5.00002 384 5.00002C354.415 5.00002 353.585 35 324 35C294.415 35 297.5 2.72008e-10 263 0Z'
                    fill={fill}
                />
            </svg>
        </div>
    )
}
