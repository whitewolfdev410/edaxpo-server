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
    return (
        <div className="mb-4">
            <div className="font-semibold">{label}</div>
            <FKField name={name} component={component} {...rest} />
        </div>
    )
}
