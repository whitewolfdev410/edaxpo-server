import { Field } from "@b/components/form/Field";
import InputRadio from "@b/components/inputs/InputRadio";
import InputText from "@b/components/inputs/InputText";
import { apiClient } from "@b/services/http/client";
import { Flex, Form, Select, Skeleton } from "antd";
import { randomUUID } from "crypto";
import { Formik } from "formik";
import React, { useEffect } from 'react';

export interface FormConfiguration {
    id: number
    name: string
    label: string
    type: string
    default: any
    value: string
    required: number
    class: string
    showOnValue: any
    group: number
    score: number
    description: any
    info: any
    spot_type: string
    ordern: string
    min: string
    max: any
    options: any[]
}
const baseStyle: React.CSSProperties = {
    width: '40%',
    height: 54,
};
export default function CreateSpot() {
    const [spotType, setSpotType] = React.useState<any>(null)

    return (
        <div className="max-w-[1100px] mx-auto mt-4 text-gray-800">
            <div className="bg-white rounded shadow-2xl p-4">
                <CreateMoto />
            </div>
        </div>
    )

}

function CreateMoto() {

    const [config, setConfig] = React.useState<any>(null);

    useEffect(() => {

        apiClient.get("/api/form/moto").then((response) => {
            setConfig(response.data)
            console.log(response.data)
        })
    }, [])

    const onSubmit = (values: any) => {
        apiClient.post("/api/form/moto", values).then((response) => {
            alert("ok")
        }).catch((error) => {
            alert("error")
        })
    }

    if (config === null) return (
        <Skeleton active />
    )
    return (

        <Formik initialValues={{}} onSubmit={onSubmit}>
            <Form>
                <Flex wrap="wrap" gap="small"  key={'contentf'}>
                    {config[2].map((el: FormConfiguration) => {

                        switch (el.type) {
                            case 'text':
                                return (
                                    <div style={{ ...baseStyle }}>
                                        <Field name="{el.name}" key={el.name} defaultValue={el.default} label={el.label} component={InputText} />
                                    </div>
                                )

                        }

                    })}
                </Flex>
            </Form>
        </Formik>

    );

}
