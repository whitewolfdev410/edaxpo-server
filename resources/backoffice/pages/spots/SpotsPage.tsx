import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import {renderDate} from "@b/components/table/renders";
import {Title} from "@b/components/layout/Title";
import {Search} from "@b/components/search/Search";

const SearchComponent = (props: any) => {

  return (
      <div className="flex flex-row justify-between">
          <Title>Annunci</Title>
          <Search/>
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
                  title: 'Titolo',
                  dataIndex: 'title',
                  width: 140,
              },
              {
                  title: 'Ricambio',
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
