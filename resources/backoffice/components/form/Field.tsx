import {ComponentType, ReactNode} from "react";
import {Field as FKField} from "formik";
import { FormattedMessage } from "react-intl";

type FieldProps = {
    label?: ReactNode;
    name: string;
    className?: string;
    options?: any[];
    component?: ComponentType<any>;
    items?: any[];
    obb?: boolean;
}

export const Field = ({name, label, component, ...rest}: FieldProps) => {
    return (
        <div className="mb-4">
            <div className="font-semibold"><FormattedMessage id={label?.toString()} /></div>
            <FKField name={name} component={component} {...rest} />
        </div>
    )
}
