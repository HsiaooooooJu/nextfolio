'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import cx from 'clsx'

interface MenuItemProps {
    bgColor: string
    hoverEffectColor: string
    href: string
    iconClassName?: string
    iconHeight?: number
    iconName?: string
    iconWidth?: number
    text?: string
}

export default function MenuItem({
    bgColor = 'bg-canary',
    hoverEffectColor = 'hover:shadow-canary',
    text = 'text',
    href,
    iconName = '',
    iconWidth = 25,
    iconHeight = 25,
    iconClassName = 'center',
}: MenuItemProps) {
    const pathname = usePathname()
    const isActive = pathname === href

    const insetShadow = isActive
        ? 'inset-shadow-btn_active'
        : 'inset-shadow-btn_default'

    return (
        <Link
            href={href}
            className={cx(
                'flex-center group relative rounded-full text-center',
                bgColor,
                insetShadow,
                isActive
                    ? 'xs:w-42 h-12 w-30 cursor-grabbing'
                    : 'size-12 transition-all duration-500 ease-in-out hover:h-12 hover:w-36',
                !isActive && hoverEffectColor,
            )}
        >
            {!isActive && iconName && (
                <Image
                    className={cx(
                        iconClassName,
                        'absolute transition-opacity delay-200 duration-300',
                        'group-hover:opacity-0 group-hover:delay-0',
                    )}
                    src={`/assets/${iconName}.svg`}
                    width={iconWidth}
                    height={iconHeight}
                    alt={iconName}
                />
            )}
            <span
                className={cx(
                    'font-hand text-xl text-black sm:text-2xl',
                    'transition-opacity duration-200 ease-in-out',
                    isActive
                        ? 'opacity-100'
                        : 'text-shadow-hover opacity-0 group-hover:opacity-100 group-hover:delay-200',
                )}
            >
                {text}
            </span>
        </Link>
    )
}
