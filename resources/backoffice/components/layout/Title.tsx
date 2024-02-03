import { ReactNode } from 'react'

type TitleProps = {
    children: ReactNode
    className?: string
}

export const Title = ({ children }:TitleProps) => {
    return (
        <div className='font-semibold text-2xl'>{children}</div>
    )
}

export const TitleMd = ({ children }:TitleProps) => {
    return (
        <div className='font-semibold text-xl'>{children}</div>
    )
}
