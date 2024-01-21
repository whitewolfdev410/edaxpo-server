import React from 'react'
import { Table as AntTable } from 'antd'
import {withConfig} from "@/contexts";

const defaultLength = 50

function showTotal(total: any, range: any) {
  return range[1] === total ? `${total} risultati` : `${range[0]}-${range[1]} di ${total} risultati`
}

export class BaseTable extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
    let page = 1
    if (props.config?.getPageFromUrl) {
      page = props.config.getPageFromUrl()
    }
    this.state = {
      data: [],
      pagination: {
        pageSize: defaultLength,
        current: page,
        position: props.paginationPosition,
        size: 'small',
      },
      sorter: props.sorter || {},
      loading: true,
    }
  }

  componentDidMount() {
    const { sorter, pagination } = this.state
    if(this.props.onRef) this.props.onRef(this)
    this.fetchData({
      order: sorter.field
        ? {
          [sorter.field]: sorter.order === 'descend' || sorter.order === 'desc' ? 'desc' : 'asc',
        }
        : undefined,
      page: pagination.current,
    })
  }

  _setUrl = (page: any) => {
    if ( this.props.config?.setPageInUrl ){
      this.props.config.setPageInUrl({ page })
    }
  }

  handleTableChange = (pagination: any, filters: any, tableSorter: any) => {
    // fix lose of sorter when changing page
    // eslint-disable-next-line react/no-access-state-in-setstate
    const sorter = tableSorter.field ? tableSorter : this.state.sorter
    if (
      pagination.current !== this.state.pagination.current
    ) {
      this._setUrl(pagination.current)
    }
    this.setState(
      {
        pagination,
        sorter,
        loading: true,
      },
      () => {
        this.fetchData({
          itemsPerPage: pagination.pageSize,
          page: pagination.current,
          order: sorter.field
            ? {
              [sorter.field]:
                sorter.order === 'descend' || sorter.order === 'desc' ? 'desc' : 'asc',
            }
            : undefined,
          // sortField: sorter.field,
          // sortOrder: sorter.order,
          // ...filters,
        })
      },
    )
    console.log("handleTableChange",{pagination, filters, sorter})
  }

  getData = (params: any) => {
    const { parms, source, config } = this.props
    if (typeof source === 'function') {
      return source({
        params: {
          itemsPerPage: defaultLength,
          ...params,
          ...parms,
        },
      })
    }
    return config.apiClient.get(source, {
      params: {
        itemsPerPage: defaultLength,
        ...params,
        ...parms,
      },
    })
  }

  fetchData = (params = {}) => {
    const { setTableData } = this.props
    const { pagination } = this.state
    this.getData(params).then((res: any) => {
      const { data, total } = res.data
      if (setTableData) {
        setTableData(res.data)
      }
      this.setState({
        loading: false,
        data: res.data['hydra:member'] || data,
        pagination: {
          ...pagination,
          total: res.data['hydra:totalItems'] || total,
        },
      })
    })
  }

  fetch(options = {}) {
    this.refresh(options)
  }

  refresh({page = null}) {
    const { pagination, sorter } = this.state

    let newPagination = pagination
    if(page){
      newPagination = {
        ...pagination,
        current: page
      }
      this._setUrl(page)
    }

    this.setState({ loading: true, pagination: newPagination}, () => {
      this.fetchData({
        itemsPerPage: newPagination.pageSize,
        page: newPagination.current,
        order: sorter.field
          ? {
            [sorter.field]:
              sorter.order === 'descend' || sorter.order === 'desc' ? 'desc' : 'asc',
          }
          : undefined,
        // sortField: sorter.field,
        // sortOrder: sorter.order,
      })
    })
  }

  render() {
    // useFixedHeader
    const {
      columns,
      rowSelection,
      debug,
      onRow,
      size = 'middle',
      scroll = { x: true },
      rowClassName,
      showHeader,
      pagination: tablePagination = true,
    } = this.props
    const { pagination, data, loading } = this.state
    /*
    expandedRowRender={}
    */

    const others: any = {}
    if (debug) {
      others.expandedRowRender = (record: any) => (
        <pre style={{ margin: 0 }}>{JSON.stringify([scroll, pagination, record], null, 2)}</pre>
      )
    }

    return (
      <AntTable
        rowSelection={rowSelection}
        columns={columns}
        rowKey={record => record.id}
        dataSource={data}
        pagination={tablePagination ? { ...pagination, showTotal } : false}
        loading={loading}
        scroll={scroll}
        size={size}
        onRow={onRow}
        showHeader={showHeader}
        rowClassName={rowClassName}
        onChange={this.handleTableChange}
        {...others}
      />
    )
  }
}

export const Table = withConfig(BaseTable)

export const TableWithRouter = withConfig(Table)

