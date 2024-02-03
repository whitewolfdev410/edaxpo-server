import {withModalForm} from "@logicpanel/admin-ui";
import React from "react";
import {Field} from "@b/components/form/Field";
import InputText from "@b/components/inputs/InputText";
import Upload from "@b/components/upload/Upload";

const BrandForm = (props: any) => {
    return (
        <div>
            <h1 className="font-bold text-xl my-2">Informazioni generali</h1>
            <Field component={InputText} name="name" label="Nome" obb/>
            <div className="text-[#707070] font-bold">Foto:<div><Upload/></div></div>
        </div>
    )
}

export default withModalForm({
    apiResource: "/api/brands",
    title: "Aggiungi marchio",
    width: 800
})(BrandForm)
