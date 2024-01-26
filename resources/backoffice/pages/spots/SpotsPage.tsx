import {Crud} from "@logicpanel/admin-ui";
import React from "react";
import {Avatar, Button} from "antd";
import {renderDate} from "@b/components/table/renders";
import {VerifiedEmailIcon} from "@b/config/icons";

const SearchComponent = (props: any) => {
  return (
    <div className="mb-2 text-right">
        <Button type="primary" onClick={() => props.onNewClick(0)}>Nuovo</Button>
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
