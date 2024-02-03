import { Field } from "@b/components/form/Field";
import InputRadio from "@b/components/inputs/InputRadio";
import InputText from "@b/components/inputs/InputText";
import { apiClient } from "@b/services/http/client";
import {Button, Flex, Row, Skeleton, Tabs, TabsProps} from "antd";
import { Formik, Form } from "formik";
import React, { useEffect } from 'react';
import {MotoIcon} from "@/Components/Icons/MotoIcon";
import { FormattedMessage } from "react-intl";
import InputCurrency from "@b/components/inputs/InputCurrency";
import InputUpload from "@b/components/inputs/InputUpload";
import Select from "@b/components/inputs/Select";
import InputSelect from "@b/components/inputs/InputSelect";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';


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

const PartialFormContainer = ({config, prev, next, currentTab, setCurrentTab}: any)  => {
    const prevI = (() => setCurrentTab(currentTab - 1))
    const nextI = (() => setCurrentTab(currentTab + 1))

    return (
        <>
            <PartialForm config={config}/>
            <Row className="flex flex-row justify-start gap-2">
            {
                prev && (<Button key={'prev-' + currentTab} icon={<ArrowLeftOutlined />} onClick={() => prevI()}><FormattedMessage id='global.back' /></Button>)
            }
            {
                next && (<Button key={'next-' + currentTab} icon={<ArrowRightOutlined />} onClick={() => nextI()}><FormattedMessage id='global.next' /></Button>)
            }
            </Row>
        </>
    )
}

const PartialForm = ({config}: any)  => {

    return (
        <Flex wrap="wrap" gap="small"  key={'contentf'}>
            {config.map((el: FormConfiguration) => {
                switch (el.type) {
                    case 'text':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} localeId={el.label} component={InputText} />
                            </div>
                        )
                    case 'select':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} className={'w-[120px]'} localeId={el.label} items={el.options} component={InputSelect} />
                            </div>
                        )
                    case 'radio':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} localeId={el.label} options={el.options} component={InputRadio} />
                            </div>
                        )
                    case 'currency':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} localeId={el.label} options={el.options} component={InputCurrency} />
                            </div>
                        )
                    case 'image':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} localeId={el.label} options={el.options} component={InputUpload} />
                            </div>
                        )
                }
            })}

        </Flex>
    )
}

function CreateMoto() {

    const [config, setConfig] = React.useState<any>(null);
    const [currentTab, setCurrentTab] = React.useState(0);
    const [progress, setProgress] = React.useState(0);
    const { data, setData } = useForm(config);


    useEffect(() => {
        apiClient.get("/api/form/moto").then((response) => {
            setConfig(response.data)
        })
    }, [])

    const onSubmit = (values: any) => {
        console.log(values)
        apiClient.post("/api/form/moto", values).then((response) => {
            alert("ok")
        }).catch((error) => {
            alert("error")
        })
    }

    useEffect(() => {
        let progress = 0
        debugger
        setProgress(25)
    }, [data]);

    if (config === null) return (
        <Skeleton active />
    )


    const items: TabsProps['items'] = [
        {
            key: '0',
            label: <span className="text-gray-800"><FormattedMessage id='form.moto.tabs.general' /></span>,
            children: <PartialFormContainer config={config[0]} prev={false} next={true} currentTab={currentTab} setCurrentTab={setCurrentTab} />,
        },
        {
            key: '1',
            label: <span className="text-gray-800"><FormattedMessage id='form.moto.tabs.form' /></span>,
            children: <PartialFormContainer config={config[1]} prev={true} next={true} currentTab={currentTab} setCurrentTab={setCurrentTab} />,
        },
        {
            key: '2',
            label: <span className="text-gray-800"><FormattedMessage id='form.moto.tabs.details' /></span>,
            children: <PartialFormContainer config={config[2]} prev={true} next={true} currentTab={currentTab} setCurrentTab={setCurrentTab} />,
        },
        {
            key: '3',
            label: <span className="text-gray-800"><FormattedMessage id='form.moto.tabs.position' /></span>,
            children: <PartialFormContainer config={config[3]} prev={true} next={true} currentTab={currentTab} setCurrentTab={setCurrentTab} />,
        },
        {
            key: '4',
            label: <span className="text-gray-800"><FormattedMessage id='form.moto.tabs.contacts' /></span>,
            children: <PartialFormContainer config={config[4]} prev={true} next={false} currentTab={currentTab} setCurrentTab={setCurrentTab} />,
        },
    ];

    return (

        <Formik initialValues={{}} onSubmit={onSubmit}>
            {({values}) => (
            <Form>
                <Tabs
                    activeKey={currentTab.toString()}
                    items={items}
                    onChange={onChange}
                />
                <Row className="flex flex-row justify-start gap-2 mt-2">
                    <Button key={'submit'} type="primary"  htmlType="submit"><FormattedMessage id='global.save' /></Button>
                    setProgress : {progress}
                </Row>
                <pre>{JSON.stringify({values},null,2)}</pre>
            </Form>
            )}
        </Formik>

    );

}
