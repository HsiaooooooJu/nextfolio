import cx from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode
    ref?: React.Ref<HTMLInputElement>
}

export default function Input({ children, ref, className, ...props }: InputProps) {
    return (
        <input
            ref={ref}
            className={cx(className, 'focus-visible:outline-none')}
            {...props}
        >
            {children}
        </input>
    )
}
