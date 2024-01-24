import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import {Avatar, Button} from "antd";
import {renderDate} from "@b/components/table/renders";

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
          pageTitle={'Admin utenti'}
          // tableHeader={false}
          searchComponent={SearchComponent}
          tableColumns={[
              {
                  title: 'Nominativo',
                  dataIndex: 'fullName',
                  render (fullName: string, row: any) {
                      return (
                          <div className="flex flex-row p-2 gap-3 items-center">
                              <div>
                                  <Avatar size={50} shape="square" src={row.imageUrl}/>
                              </div>
                              <div>
                                  <div>{row.first_name} {row.last_name}</div>
                                  <div>{row.email}</div>
                              </div>
                          </div>
                      )
                  },
              },
              {
                  title: 'Created At',
                  dataIndex: 'created_at',
                  width: 150,
                  className: 'text-center',
                  render: renderDate
              },
              {
                  title: 'Created At',
                  dataIndex: 'updated_at',
                  width: 150,
                  className: 'text-center',
                  render: renderDate
              },
          ]}
      />
  )
}
