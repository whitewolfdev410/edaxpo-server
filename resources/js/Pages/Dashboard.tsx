import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Field, Form, Formik} from "formik";
import React from "react";
import {Button, Slider} from "antd";
import DatePicker from "@b/components/inputs/DatePicker";
import InputText from "@b/components/inputs/InputText";


const InputSlider = ({form, field}: any) => {
    return (
        <>
            <Slider
                value={field.value}
                onChange={(value) => {
                    form.setFieldValue(field.name, value)
                }}
            />
            <div>: {field.value}</div>
        </>
    )
}

const inputs: any = [
    {
        type: 'text',
        name: 'first_name',
        label: 'Nome'
    },
    {
        type: 'text',
        name: 'last_name',
        label: 'Cognome'
    },
    {
        type: 'text',
        name: 'email',
        label: 'Email'
    },
    {
        type: 'slider',
        name: 'active',
        label: 'Attivo'
    }
]

const inputTypes: any  = {
    text: InputText,
    slider: InputSlider,
    date: DatePicker
}

export default function Dashboard({ auth }: PageProps) {
    const showSlider = true;
    const slider = showSlider ? (
        <Field
            component={InputSlider}
            name={"eta"}
        />
    ): (
        <Field
            component={DatePicker}
            name={"datanascita"}
        />
    )

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="w-[1000px] mx-auto p-4 mt-2 bg-gray-100 rounded-lg">
                <Formik
                    initialValues={{
                        first_name: 'qeeqwe',
                        last_name: '',
                        email: '',
                        eta: 18,
                        active: false
                    }}
                    onSubmit={(values) => {
                        console.log('submit', values);
                    }}
                >
                    <Form>
                        {inputs.map((input: any) => {
                            return <Field name={input.name} component={inputTypes[input.type] ?? InputText}  />
                        })}
                        <Field name={"first_name"}  />
                        {showSlider && (
                            <Field component={InputSlider} name={"eta"}  />
                        )}
                        {slider}
                        <Field component={DatePicker} name={"datanascita"}  />
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form>
                </Formik>
            </div>
        </AuthenticatedLayout>
    );
}
