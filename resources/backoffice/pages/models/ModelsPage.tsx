import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import Switch from "@b/components/inputs/Switch";
import {SecondaryButton} from "@b/components/buttons/Button";
import {Title} from "@b/components/layout/Title";
import {Search} from "@b/components/search/Search";


const SearchComponent = (props: any) => {
    return (
        <div className="mb-4 flex flex-row justify-between">
            <Title>Modelli</Title>
            <SecondaryButton onClick={() => props.onNewClick(0)}>+ Aggiungi prodotto</SecondaryButton>
        </div>
    )
}

export default function ModelsPage() {

    return (
        <div>
            <Crud
                debug
                apiResource={''}
                modalKey={'model'}
                pageTitle={'Modelli'}
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
                        title: 'Foto ultimo anno',
                        dataIndex: '',
                        render: () => <img src="" alt=""/>

                    },
                    {
                        title: 'Marchio',
                        dataIndex: '',
                    },
                    {
                        title: 'Nome',
                        dataIndex: '',
                    },
                    {
                        title: 'Categoria',
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
