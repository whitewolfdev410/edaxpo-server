import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import {Avatar, Tag} from "antd";

const SearchComponent = (props: any) => {
  return (
    <div>asdad</div>
  )
}

export default function UsersPage() {
  return (
      <Crud
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
                                  <div>{row.firstName} {row.lastName}</div>
                                  <div>{row.email}</div>
                              </div>
                          </div>
                      )
                  },
              },
              {
                  title: 'Sede',
                  dataIndex: 'school',
                  render: (school: any) => <Tag color={school?.coloreDitta}>{school?.codiceDitta}</Tag>,
                  width: 150,
                  className: 'text-center',
              },
              {
                  title: 'Username',
                  dataIndex: 'username',
                  width: 150,
                  className: 'text-center',
              },
          ]}
      />
  )
}
