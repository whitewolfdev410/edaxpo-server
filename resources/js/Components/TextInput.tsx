import {forwardRef, useEffect, useImperativeHandle, useRef, ComponentProps} from 'react';
import {Input, InputRef} from "antd";

type InputProps =  ComponentProps<typeof Input>

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props }: InputProps & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<InputRef>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <Input
            {...props}
            type={type}
            className={
                className
            }
            ref={localRef}
        />
    );
});
