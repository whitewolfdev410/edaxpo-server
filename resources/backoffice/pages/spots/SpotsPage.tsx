import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import {renderDate} from "@b/components/table/renders";
import {Title, TitleMd} from "@b/components/layout/Title";
import {Field} from "@b/components/form/Field";
import {Button, TransparentButton} from "@b/components/buttons/Button";
import InputText from "@b/components/inputs/InputText";


const SearchComponent = (props: any) => {
    const {onSubmitClick} = props
  return (
      <div>
          <Title>Annunci</Title>
          <div className="flex flex-row gap-2 ">
              <Field name='fullName' component={InputText} placeholder='cerca...'/>
              <Button onClick={onSubmitClick}>Cerca</Button>
              <TransparentButton onClick={onSubmitClick}>Svuota</TransparentButton>
          </div>
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
