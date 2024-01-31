import {withModalForm} from "@logicpanel/admin-ui";
import React from "react";
import {Field} from "@b/components/form/Field";
import InputText from "@b/components/inputs/InputText";
import Switch from "@b/components/inputs/Switch";

const UserForm = (props: any) => {
    return (
        <div className=' grid grid-cols-2 gap-x-4'>
            <Field component={InputText} name="first_name" label="Nome" obb/>
            <Field component={InputText} name="last_name" label="Cognome" obb/>
            <Field component={InputText} name="email" label="Email" obb/>
            <Field component={InputText} name="phone" label="Telefono" />
            <Field component={InputText} name="" label="Codice Fiscale" />
            <Field component={InputText} name="country" label="Paese" />
            <Field component={InputText} name="city" label="Città" />
            <Field component={InputText} name="state" label="Provincia" />
            <Field component={InputText} name="address" label="Indirizzo" />
            <Field component={InputText} name="country_code" label="CAP" />
            <Field component={InputText} name="role" label="Ruolo" obb/>
            <Field component={Switch} name="active" label="Attivo" />
        </div>
    )
}

export default withModalForm({
    apiResource: "/api/users",
    title: "Modifica Utente",
    width: 600
})(UserForm)
