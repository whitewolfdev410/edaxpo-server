import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import Switch from "@b/components/inputs/Switch";
import {SecondaryButton} from "@b/components/buttons/Button";
import {Title} from "@b/components/layout/Title";


const SearchComponent = (props: any) => {
    return (
        <div className="mb-4 flex flex-row justify-between">
            <Title>Componenti</Title>
            <SecondaryButton onClick={() => props.onNewClick(0)}>+ Aggiungi componente</SecondaryButton>
        </div>
    )
}

export default function ComponentsPage() {

    return (
        <div>
            <Crud
                debug
                apiResource={''}
                modalKey={'component'}
                pageTitle={'Componenti'}
                // tableHeader={false}
                searchComponent={SearchComponent}
                tableColumns={[
                    {
                        title: 'ID',
                        dataIndex: '',
                        width: 80,
                        className: 'text-center',
                    },
                    {
                        title: '',
                        dataIndex: '',
                        width: 140,
                        render: () => <img src="" alt=""/>

                    },
                    {
                        title: 'Nome IT',
                        dataIndex: '',
                    },
                    {
                        title: 'Nome EN',
                        dataIndex: '',
                    },
                    {
                        title: 'Nome DE',
                        dataIndex: '',
                    },
                    {
                        title: 'Nome FR',
                        dataIndex: '',
                    },
                    {
                        title: 'Nome ES',
                        dataIndex: '',
                    },
                    {
                        title: 'Stato',
                        dataIndex: 'active',
                        width: 100,
                        render: Switch
                    },
                    {
                        dataIndex: '_action',
                    }
                ]}
            />
        </div>
    )
}
