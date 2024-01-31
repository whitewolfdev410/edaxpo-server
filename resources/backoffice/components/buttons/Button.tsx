import { Button as BButton} from 'antd'
import React from "react";

type BButtonProps = React.ComponentProps<typeof BButton>

interface ButtonProps extends BButtonProps {
    className?: string;
    onClick?: any;
    children: any;
    loading?: boolean;
    tabIndex?: number
    disabled?: boolean
    title?: string
    ariaLabel?: string
}

export const Button = (props: ButtonProps) => {
    const { ariaLabel, className, loading,size, onClick, children, type = "primary", icon, tabIndex,...rest } = props

    return (
        <BButton
            aria-label={ariaLabel}
            disabled={props.disabled}
            size={size}
            onClick={onClick}
            className={className}
            type={type}
            loading={loading}
            tabIndex={tabIndex}
            icon={icon}
            {...rest}
        >
            {children}
        </BButton>
    )
}


export const SecondaryButton = (props: ButtonProps) => {
    const {className, children,...rest } = props

    const finalClassName = className ? className + "!bg-[#41b883] !text-white !border-[#41b883] hover:!bg-[#55c392] hover:!border[#55c392]" : "!bg-[#41b883] !text-white !border-[#41b883] hover:!bg-[#55c392]  hover:!border[#55c392]"

    return (
        <Button className={finalClassName} {...rest} >
            {children}
        </Button>
    )
}

export const TransparentButton = (props: ButtonProps) => {
    const {className, children,...rest } = props

    const finalClassName = className ? className + "!border-[#e4e9f0] !bg-white hover:!border-[#78a3ff] hover:!bg-white !text-[#595c97] hover:!text-[#78a3ff]" : "!border-[#e4e9f0] !bg-white hover:!border-[#78a3ff] hover:!bg-white !text-[#595c97] hover:!text-[#78a3ff]"

    return (
        <Button className={finalClassName} {...rest} >
            {children}
        </Button>
    )
}
