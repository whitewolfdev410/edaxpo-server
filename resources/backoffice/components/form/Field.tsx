import { Field as FKField } from "formik";
import { ComponentType, ReactNode } from "react";

type FieldProps = {
    label?: ReactNode;
    defaultValue?: string;
    className?: string;
    options?: any[];
    name: string;
    component?: ComponentType<any>;
}

export const Field = (props: FieldProps) => {
    const Component = props.component;
    return (
        <div>
            <div className="font-semibold">{props.label}</div>
            <FKField className={props.className} name={props.name} defaultValue={props.defaultValue} options={props.options} component={Component} />
        </div>
    )
}