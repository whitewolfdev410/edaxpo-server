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
                  title: 'ID',
                  dataIndex: 'id',
                    width: 80,
                  className: 'text-center',
              },
              {
                  title: '',
                  dataIndex: 'cover',
                  width: 80,
                  className: 'text-center',
                  render: (r: string) => <Avatar src={r} shape="square"   size={64} icon={<VerifiedEmailIcon />} />
              },
              {
                  title: 'titolo',
                  dataIndex: 'title',
                  width: 140,
              },
              {
                  title: 'descrizione',
                  dataIndex: 'desc',
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
