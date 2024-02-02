import {Button, SecondaryButton, TransparentButton} from "@b/components/buttons/Button";
import React from "react";
import InputText from "@b/components/inputs/InputText";
import {Field} from "formik";
import {RestoreIcon} from "@b/components/icons/RestoreIcon";

const UsersSearch = (props: any) => {
    const {onSubmitClick} = props
    return (
       <div className="bg-[#f6f6f6] my-4 rounded-lg">
           <div className="flex flex-row gap-2 p-2 justify-center items-center">
               <Field name='fullName' component={InputText} className="w-[400px]"/>
               <Button onClick={onSubmitClick}>Cerca</Button>
               <TransparentButton onClick={onSubmitClick}>Svuota</TransparentButton>
               <SecondaryButton onClick={() => props.onNewClick(0)}>+ Aggiungi utente</SecondaryButton>
           </div>
       </div>
    )
}

export default UsersSearch
