import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import {Avatar, Button} from "antd";
import {renderDate} from "@b/components/table/renders";
import {VerifiedEmailIcon} from "@b/config/icons";
import Switch from "@b/components/inputs/Switch";
import {Field} from "@b/components/form/Field";

const SearchComponent = (props: any) => {
  return (
    <div className="mb-2 text-right">
        <Button type="primary" onClick={() => props.onNewClick(0)}>Nuovo</Button>
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
                  title: 'Id',
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
                                  <div>{row.first_name} {row.last_name}</div>
                                  <div><VerifiedEmailIcon className={row.email_verified_at ? "text-green-500" : "text-red-500"} /> {row.email}</div>
                              </div>
                          </div>
                      )
                  },
              },
              {
                  title: 'Username',
                  dataIndex: 'email',
              },
              {
                  title: 'Ruolo',
                  dataIndex: 'role',
              },
              {
                  title: 'Data Registrazione',
                  dataIndex: 'created_at',
                  render: renderDate
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
