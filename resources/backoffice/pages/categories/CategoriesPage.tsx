import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import Switch from "@b/components/inputs/Switch";
import {SecondaryButton} from "@b/components/buttons/Button";
import {Title} from "@b/components/layout/Title";


const SearchComponent = (props: any) => {
    return (
        <div className="mb-4 flex flex-row justify-between">
            <Title>Categorie</Title>
            <SecondaryButton onClick={() => props.onNewClick(0)}>+ Aggiungi categoria</SecondaryButton>
        </div>
    )
}

export default function CategoriesPage() {

    return (
        <div>
            <Crud
                debug
                apiResource={''}
                modalKey={'category'}
                pageTitle={'Categorie'}
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
