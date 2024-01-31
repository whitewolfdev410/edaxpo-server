import {withModalForm} from "@logicpanel/admin-ui";
import React from "react";
import {Field} from "@b/components/form/Field";
import InputText from "@b/components/inputs/InputText";
import AsyncSelect from "@b/components/inputs/AsyncSelect";

const ModelForm = (props: any) => {
    return (
        <div>
            <h1 className="font-bold text-xl my-2">Informazioni generali</h1>
            <Field component={InputText} name="name" label="Nome" obb/>
        </div>
    )
}

export default withModalForm({
    apiResource: "/api/brands",
    title: "Aggiungi marchio",
    width: 800
})(ModelForm)
