import {ReactNode} from "react";

export const Card = (props: { children: ReactNode, className?: string }) => {
    return (
        <div className={"bg-white shadow-md rounded-md p-4 "+props.className}>
            {props.children}
        </div>
    )
}

export const Container = (props: { children: ReactNode }) => {
    return (
        <div className="mx-auto max-w-screen-lg">
            {props.children}
        </div>
    )
}
