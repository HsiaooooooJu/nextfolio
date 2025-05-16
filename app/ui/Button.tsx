import cx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    isActive?: boolean
    noShadow?: boolean
}

export default function Button({
    isActive,
    children,
    className,
    noShadow,
    ...props
}: ButtonProps) {
    const active = isActive
        ? 'inset-shadow-btn_active'
        : 'inset-shadow-btn_default cursor-pointer'
    const shadow = noShadow ? '' : active

    return (
        <button className={cx(className, shadow)} {...props}>
            {children}
        </button>
    )
}
