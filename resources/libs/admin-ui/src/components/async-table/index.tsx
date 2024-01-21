import React from 'react'
import {Table as AntTable, Pagination} from "antd";
import {AsyncTableProvider, useAsyncTable} from "@/components/async-table/context";

export const AsyncTableBase = (props: any) => {

  const {loading, response} = useAsyncTable()

  const {
    columns,
    rowSelection,
    debug,
    onRow,
    size = 'middle',
    scroll = { x: true },
    rowClassName,
    showHeader,
    // pagination: tablePagination = true,
  } = props
  // const { pagination, data, loading } = this.state

  const others: any = {}
  if (debug) {
    others.expandedRowRender = (record: any) => (
      <pre style={{ margin: 0 }}>{JSON.stringify([scroll, record], null, 2)}</pre>
    )
  }

  return (
    <AntTable
      rowSelection={rowSelection}
      columns={columns}
      // pagination={tablePagination ? { ...pagination, showTotal } : false}
      pagination={false}
      rowKey={record => record.id}
      dataSource={response?.["hydra:member"] || []}
      loading={loading}
      scroll={scroll}
      size={size}
      onRow={onRow}
      showHeader={showHeader}
      rowClassName={rowClassName}
      // onChange={this.handleTableChange}
      {...others}
    />
  )
}


export const AsyncTable = (props: any) => {
  return (
    <AsyncTableProvider
      params={props.params}
      source={props.source}
    >
      {/* <Paginator /> */}
      <AsyncTableBase {...props} />
    </AsyncTableProvider>
  )
}


export const Paginator = () => {
  const {pagination, setPagination, loading} = useAsyncTable()
  return (
    <Pagination
      disabled={loading}
      current={pagination.current}
      total={pagination.total}
      pageSize={pagination.pageSize}
      onChange={(page,pageSize) => {
        setPagination((prevState: any) => ({...prevState, current: page, pageSize: pageSize}))
      }}
    />
  )
}
