import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import {Avatar} from "antd";
import {renderDate} from "@b/components/table/renders";
import {VerifiedEmailIcon} from "@b/config/icons";
import Switch from "@b/components/inputs/Switch";
import {SecondaryButton} from "@b/components/buttons/Button";
import {Title} from "@b/components/layout/Title";

const SearchComponent = (props: any) => {
  return (
    <div className="mb-4 flex flex-row justify-between">
        <Title>Utenti</Title>
        <SecondaryButton onClick={() => props.onNewClick(0)}>+ Aggiungi utente</SecondaryButton>
    </div>
  )
}

export default function UsersPage() {
  return (
      <Crud
          debug
          apiResource={'/api/users'}
          tableApiResource={'/api/users/instructors'}
          modalKey={'user'}
          pageTitle={'Utenti'}
          // tableHeader={false}
          searchComponent={SearchComponent}
          tableColumns={[
              {
                  title: 'ID',
                  dataIndex: 'id',
                  width: 50,
              },
              {
                  title: 'Nominativo',
                  dataIndex: 'fullName',
                  className: '',
                  render (fullName: string, row: any) {
                      return (
                          <div className="flex flex-row p-2 gap-3 items-center">
                              <div>
                                  <Avatar size={50} shape="square" src={row.imageUrl}/>
                              </div>
                              <div>
                                  <div className='font-semibold text-[18px]'>{row.first_name} {row.last_name}</div>
                                  <div><VerifiedEmailIcon className={row.email_verified_at ? "text-green-500" : "text-red-500"} /> {row.email}</div>
                              </div>
                          </div>
                      )
                  },
              },
              {
                  title: 'Lingua',
                  dataIndex: '',
              },
              {
                  title: 'Ruolo',
                  dataIndex: 'role',
              },
              {
                  title: 'Data Registrazione',
                  dataIndex: 'created_at',
                  render: renderDate,
                  className: 'text-black'
              },
              {
                  title: 'Attivo',
                  dataIndex: 'active',
                  width: 100,
                  render: Switch
              },
              {
                  dataIndex: '_action',
              }
          ]}
      />
  )
}
