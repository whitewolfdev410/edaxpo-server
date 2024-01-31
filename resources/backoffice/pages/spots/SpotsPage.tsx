import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import {Avatar, Button} from "antd";
import {renderDate} from "@b/components/table/renders";
import {VerifiedEmailIcon} from "@b/config/icons";
import {Title} from "@b/components/layout/Title";
import {SecondaryButton} from "@b/components/buttons/Button";

const SearchComponent = (props: any) => {
  return (
    <div className="mb-4 flex flex-row justify-between">
        <Title>Annunci</Title>
        <SecondaryButton onClick={() => props.onNewClick(0)}>Nuovo</SecondaryButton>
    </div>
  )
}

export default function SpotsPage() {
  return (
      <Crud
          debug
          apiResource={'/api/spots'}
          modalKey={'spot'}
          pageTitle={'Admin spots'}
          // tableHeader={false}
          searchComponent={SearchComponent}
          tableColumns={[
              {
                  title: 'ID',
                  dataIndex: 'id',
                    width: 80,
                  className: 'text-center',
              },
              {
                  title: 'titolo',
                  dataIndex: 'title',
                  width: 140,
              },
              {
                  title: 'Ricambi',
                  dataIndex: '',
              },
              {
                  title: 'Tipo Utente',
                  dataIndex: '',
              },
              {
                  title: 'Data inserimento',
                  dataIndex: 'created_at',
                  className: 'text-center',
                  render: renderDate
              },
              {
                  title: 'Ultimo rinnovo',
                  dataIndex: 'updated_at',
                  className: 'text-center',
                  render: renderDate
              },
              {
                  title: 'Link',
                  dataIndex: '',
                  width: 80,
              },
              {
                  title: 'Attivo',
                  dataIndex: '',
                  width: 80,
              },
              {
                  dataIndex: '_action',
              }
          ]}
      />
  )
}
