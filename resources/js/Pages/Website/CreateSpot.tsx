import { Field } from "@b/components/form/Field";
import InputRadio from "@b/components/inputs/InputRadio";
import InputText from "@b/components/inputs/InputText";
import { apiClient } from "@b/services/http/client";
import {Flex, Form, Select, Skeleton, Tabs, TabsProps} from "antd";
import { randomUUID } from "crypto";
import { Formik } from "formik";
import React, { useEffect } from 'react';
import {MotoIcon} from "@/Components/Icons/MotoIcon";

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

const onChange = (key: string) => {
    console.log(key);
};

const PartialForm = ({config}: any)  => {
    return (
        <Flex wrap="wrap" gap="small"  key={'contentf'}>
            {config.map((el: FormConfiguration) => {
                switch (el.type) {
                    case 'text':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} label={el.label} component={InputText} />
                            </div>
                        )
                    case 'select':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} className={'w-[120px]'} label={el.label} options={el.options} component={Select} />
                            </div>
                        )
                    case 'radio':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} label={el.label} options={el.options} component={InputRadio} />
                            </div>
                        )
                }
            })}
        </Flex>
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

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: <span className="text-gray-800"><MotoIcon /></span>,
            children: <PartialForm config={config[0]} />,
        },
        {
            key: '2',
            label: <span className="text-gray-800"><MotoIcon /></span>,
            children: <PartialForm config={config[1]} />,
        },
        {
            key: '3',
            label: <span className="text-gray-800"><MotoIcon /></span>,
            children: <PartialForm config={config[2]} />,
        },
    ];

    return (

        <Formik initialValues={{}} onSubmit={onSubmit}>
            <Form>
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                />
            </Form>
        </Formik>

    );

}
