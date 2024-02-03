import React from "react";
import {Field} from "@b/components/form/Field";
import InputText from "@b/components/inputs/InputText";
import {Button, TransparentButton} from "@b/components/buttons/Button";

export const Search =  (props: any) => {
    const {onSubmitClick} = props

    return (
        <div className="flex flex-row gap-2 ">
          <Field name='fullName' component={InputText}/>
          <Button onClick={onSubmitClick}>Cerca</Button>
          <TransparentButton onClick={onSubmitClick}>Svuota</TransparentButton>
        </div>
    );
}
