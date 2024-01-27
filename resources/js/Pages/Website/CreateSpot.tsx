import React, {useEffect} from 'react';
import {Button, Skeleton, Steps} from "antd";
import {Form, Formik} from "formik";
import {Field} from "@b/components/form/Field";
import InputText from "@b/components/inputs/InputText";
import {apiClient} from "@b/services/http/client";


export default function CreateSpot() {
    const [spotType, setSpotType] = React.useState<any>(null)

    return (
        <div className="max-w-[1100px] mx-auto mt-4 text-gray-800">
            <div className="bg-white rounded shadow-2xl p-4">
                {spotType === null && (
                    <div className="flex flex-row">
                        <Button onClick={() => setSpotType("moto")}>
                            Inserisci annuncio moto
                        </Button>
                        <Button onClick={() => setSpotType("ricambio")}>
                            Inserisci annuncio ricambio
                        </Button>
                    </div>

                )}
                {spotType === "moto" && (
                    <CreateMoto />
                )}
            </div>
        </div>
    )

}

function CreateMoto() {

    const [config, setConfig] = React.useState<any>(null);

    useEffect(() => {
        apiClient.get("/api/form/moto").then((response) =>{
            setConfig(response.data)
        })
    },[])

    const description = "Content of Step 1."

    const onSubmit = (values: any) => {
        apiClient.post("/api/form/moto",values).then((response) =>{
            alert("ok")
        }).catch((error) => {
            alert("error")
        })
    }

    if(config === null) return (
        <Skeleton active />
    )

    return (
        <Formik initialValues={{}} onSubmit={onSubmit}>
            {({values}) => (
                <Form>
                    <Steps
                        current={1}
                        items={[
                            {
                                title: 'Finished',
                                description,
                            },
                            {
                                title: 'In Progress',
                                description,
                                subTitle: 'Left 00:00:08',
                            },
                            {
                                title: 'Waiting',
                                description,
                            },
                        ]}
                    />
                    <div>
                        <Field name="title" component={InputText} />
                        <Field name="desc" component={InputText} />
                        <Field name="body" component={InputText} />
                        <Button htmlType="submit">Submit</Button>
                    </div>
                    <pre>{JSON.stringify({config,values},null,2)}</pre>
                </Form>
            )}
        </Formik>
    );
}
