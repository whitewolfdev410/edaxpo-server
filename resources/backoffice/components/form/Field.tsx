import {ComponentType, ReactNode} from "react";
import {Field as FKField} from "formik";

type FieldProps = {
    label?: ReactNode;
    name: string;
    className?: string;
    options?: any[];
    component?: ComponentType<any>;
    items?: any[];
}

export const Field = ({name, label, component, ...rest}: FieldProps) => {
    const Component = component;
    return (
        <div className="mb-4">
            <div className="text-[#707070] font-semibold">{label}</div>
            <FKField name={name} component={Component} {...rest} />
        </div>
    )
}
