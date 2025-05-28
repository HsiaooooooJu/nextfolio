import { Metadata } from 'next'
import ProjectList from './ProjectList'
import cx from 'clsx'

export const metadata: Metadata = {
    title: 'Project',
}

const projects = [
    {
        title: 'Parkit',
        tech: 'React/JS',
        demo: 'https://hsiaooooooju.github.io/parkit/#/home',
        github: 'https://github.com/HsiaooooooJu/parkit',
        image: '/images/parkit_preview.jpg',
    },
    {
        title: 'Hangman',
        tech: 'React/TS/CSS Modules',
        demo: 'https://hsiaooooooju.github.io/react-hangman/',
        github: 'https://github.com/HsiaooooooJu/react-hangman',
        image: '/images/hangman_preview.jpg',
    },
    {
        title: 'Friend-List',
        tech: 'HTML/CSS/JS',
        demo: 'https://hsiaooooooju.github.io/Friend-List/index.html',
        github: 'https://github.com/HsiaooooooJu/Friend-List',
        image: '/images/friends_list_preview.jpg',
    },
]

const colorMap = [
    ['bg-blue/20', 'group-hover:bg-pink/20'],
    ['bg-blue/40', 'group-hover:bg-pink/40'],
    ['bg-blue/60', 'group-hover:bg-pink/60'],
    ['bg-blue/80', 'group-hover:bg-pink/80'],
    ['bg-blue', 'group-hover:bg-pink'],
]

export default function Project() {
    return (
        <div className='slide_left relative flex justify-center md:justify-between'>
            <ProjectList list={projects} />
            <div className='group absolute right-4 bottom-0 hidden gap-4 md:flex'>
                {colorMap.map(([baseColor, hoverColor], index) => (
                    <div
                        key={index}
                        className={cx(
                            'size-14 rounded-tr-full',
                            baseColor,
                            hoverColor,
                        )}
                    />
                ))}
            </div>
        </div>
    )
}
