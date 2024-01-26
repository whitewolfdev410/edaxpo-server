import {withModalForm} from "@logicpanel/admin-ui";
import React from "react";
import {Field} from "@b/components/form/Field";
import InputText from "@b/components/inputs/InputText";
import Textarea from "@b/components/inputs/Textarea";
import Select from "@b/components/inputs/Select";

const SpotForm = (props: any) => {
    return (
        <div>
            <Field component={InputText} name="title" label="Nome" />
            <Field component={Textarea} name="desc" label="Descrizione" />
            <Field component={Textarea} name="body" label="Body" />
            <Field
                component={Select}
                name="status"
                label="Status"
                items={[
                    {id: "published", label: "Pubblicato"},
                    {id: "draft", label: "Bozza"},
                ]}
            />
        </div>
    )
}

export default withModalForm({
    apiResource: "/api/spots",
    title: "Spots",
    width: 600
})(SpotForm)
