import {withModalForm} from "@logicpanel/admin-ui";
import React from "react";
import {Field} from "@b/components/form/Field";
import InputText from "@b/components/inputs/InputText";
import Switch from "@b/components/inputs/Switch";

const ComponetForm = (props: any) => {
    return (
        <div>
            <h1 className="font-bold text-[18px]">Contenuti in lingua</h1>
            <p className="mb-4 text-[#707070]">Prima di modificare i contenuti, ricordati di attivare la lingua.</p>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Field component={InputText} name="name" label={<span>Nome <strong className="text-black">IT</strong></span>} obb/>
                    <Field component={InputText} name="name" label={<span>Nome <strong className="text-black">EN</strong></span>}/>
                    <Field component={InputText} name="name" label={<span>Nome <strong className="text-black">DE</strong></span>}/>
                    <Field component={InputText} name="name" label={<span>Nome <strong className="text-black">FR</strong></span>}/>
                    <Field component={InputText} name="name" label={<span>Nome <strong className="text-black">ES</strong></span>}/>
                </div>
                <div className="text-[#707070]">
                    <form action="/upload" method="post">
                        <label className="font-bold">Foto:</label>
                        <div><input type="file" id="imageUpload" name="image" accept="image/*"/></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withModalForm({
    apiResource: "/api/users",
    title: "Aggiungi componente",
    width: 800
})(ComponetForm)
