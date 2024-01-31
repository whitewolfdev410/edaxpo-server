import {withModalForm} from "@logicpanel/admin-ui";
import React from "react";
import {Field} from "@b/components/form/Field";
import InputText from "@b/components/inputs/InputText";

const BrandForm = (props: any) => {
    return (
        <div>
            <h1 className="font-bold text-xl my-2">Informazioni generali</h1>
            <div>
                <Field component={InputText} name="name" label="Nome" obb/>
                    <form action="/upload" method="post" className="text-[#707070]">
                        <label className="font-bold">Foto:</label>
                        <div><input type="file" id="imageUpload" name="image" accept="image/*"/></div>
                    </form>
            </div>
        </div>
    )
}

export default withModalForm({
    apiResource: "/api/brands",
    title: "Aggiungi marchio",
    width: 800
})(BrandForm)
