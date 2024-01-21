import {withModalForm} from "@logicpanel/admin-ui";
import React from "react";
import {Field} from "@b/components/form/Field";
import InputText from "@b/components/inputs/InputText";
import Switch from "@b/components/inputs/Switch";

const UserForm = (props: any) => {
    return (
        <div>
            <Field component={InputText} name="first_name" label="Nome" />
            <Field component={InputText} name="last_name" label="Cognome" />
            <Field component={InputText} name="email" label="Email" />
            <Field component={Switch} name="active" label="Attivo" />
        </div>
    )
}

export default withModalForm({
    apiResource: "/api/users",
    title: "Utente",
    width: 600
})(UserForm)
