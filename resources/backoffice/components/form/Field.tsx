import {ComponentType, ReactNode} from "react";
import {Field as FKField} from "formik";

type FieldProps = {
    label?: ReactNode;
    name: string;
    component?: ComponentType<any>;
}

export const Field = (props: FieldProps) => {
    const Component = props.component;
    return (
        <div>
            <div className="font-semibold">{props.label}</div>
            <FKField name={props.name} component={Component} />
        </div>
    )
}
