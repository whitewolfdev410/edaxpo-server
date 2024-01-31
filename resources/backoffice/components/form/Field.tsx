import {ComponentType, ReactNode} from "react";
import {Field as FKField} from "formik";
import { FormattedMessage } from "react-intl";

type FieldProps = {
    label?: ReactNode;
    localeId?: string
    name: string;
    className?: string;
    options?: any[];
    component?: ComponentType<any>;
    items?: any[];
    obb?: boolean;
}

export const Field = ({name, label, localeId, component, obb, ...rest}: FieldProps) => {
    return (
        <div className="mb-4">
            <div className="font-semibold">
                {label}
                {localeId && <FormattedMessage id={localeId} />}
                {obb && <span className={'text-red-600'}> *</span>}
            </div>
            <FKField name={name} component={component} {...rest} />
        </div>
    )
}
