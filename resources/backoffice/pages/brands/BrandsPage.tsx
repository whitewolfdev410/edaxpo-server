import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import Switch from "@b/components/inputs/Switch";
import {SecondaryButton} from "@b/components/buttons/Button";
import {Title} from "@b/components/layout/Title";


const SearchComponent = (props: any) => {
    return (
        <div className="mb-4 flex flex-row justify-between">
            <Title>Marchi</Title>
            <SecondaryButton onClick={() => props.onNewClick(0)}>+ Aggiungi marchio</SecondaryButton>
        </div>
    )
}

export default function BrandsPage() {

    return (
        <div>
            <Crud
                debug
                apiResource={''}
                modalKey={'brand'}
                pageTitle={'Marchi'}
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
                        title: 'Nome',
                        dataIndex: '',
                        width: 140,
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
