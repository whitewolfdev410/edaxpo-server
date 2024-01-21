import * as React from 'react'
import {Table, TableWithRouter} from '@/components/table'
import {Dropdown} from 'antd'
import { useMemo } from 'react'
import withCustomization from '@/components/hocs/with-customization'
import {useConfig} from "@/contexts";
// import {AsyncTable} from "@/components/async-table";

/* const TableActionButtons = ({ onClick, onDeleteClick, showDeleteButton }: any) => (
  <div>
    <TableButton onClick={onClick} color={'light-blue'} className={'mr-2'}>
      <EditIcon style={{ fontSize: 20 }} />
    </TableButton>
    <TableButton onClick={onDeleteClick} color={'outline-danger'} disabled={!showDeleteButton}>
      <TrashIcon style={{ fontSize: 21 }} />
    </TableButton>
  </div>
) */

export const CrudTable = ({
  tableRouter,
  actionButtonType,
  showDeleteButton,
  selectable,
  onOpenContextMenu,
  onOpenForm,
  confirmDelete,
  sortedFields,
  definitions,
  paginationPosition,
  menu,
  onSelectionChange,
  selectedRowKeys,
  tableButtonsComponent,
  ...props
}: any) => {
  // sortedFields if is wrapped in customizable component
  const tableColumns = sortedFields || definitions

  const {TableActionButtons, TableContextMenuIcon, locales} = useConfig()

  const FinalTable = tableRouter  ? TableWithRouter : Table // AsyncTable

  const columns = useMemo(() => {
    let actionButton
    let actionButtonRight
    let finalColumns

    const finalShowDeleteButton =
      typeof showDeleteButton === 'function' ? showDeleteButton : () => showDeleteButton

    const TableButtonsComponent = tableButtonsComponent || TableActionButtons

    if (actionButtonType === 'edit') {
      actionButtonRight = {
        title: locales?.["global.actions"] || "",
        dataIndex: 'id',
        className: 'text-center',
        width: 115,
        sortable: false,
        render: (_: any, row: any) => (
          <TableButtonsComponent
            style={{ fontSize: 20 }}
            className={'link-text'}
            row={row}
            onClick={() => onOpenForm(row.id)}
            onDeleteClick={() => confirmDelete(row.id)}
            showDeleteButton={finalShowDeleteButton(row)}
          />
        ),
      }
    } else if (actionButtonType === 'context-menu') {
      actionButton = {
        title: locales?.["global.actions"] || "Actions",
        dataIndex: 'id',
        className: 'text-center',
				fixed: true,
        width: 85,
        render: (_: any, row: any) => {
          const onVisibleChange = (s: any) => s && onOpenContextMenu(row, false)
          return (
            <div className='flex justify-center'>
              <Dropdown
                onOpenChange={onVisibleChange}
                menu={{}}
                dropdownRender={() => (
                  menu
                )}
                trigger={['click']}
              >
                <button>
                  <TableContextMenuIcon style={{ fontSize: 20 }} className='link-text text-main action-cell' />
                </button>
              </Dropdown>
            </div>
          )
        },
      }
    }

    finalColumns = tableColumns

    const hasActionDef = tableColumns.findIndex((col: any) => col.dataIndex === '_action')

    if (actionButton || actionButtonRight) {
      const actionsColumn = actionButton || actionButtonRight
      if (hasActionDef >= 0) {
        finalColumns = [
          ...tableColumns.slice(0, hasActionDef),
          actionsColumn,
          ...tableColumns.slice(hasActionDef + 1)
        ];
      } else {
        if (actionButton) {
          finalColumns = [actionButton, ...tableColumns]
        }
        if (actionButtonRight) {
          finalColumns = [...tableColumns, actionButtonRight]
        }
      }
    }

    // rimuovo collona _action se actionButtonType è false
    if (actionButtonType === false && hasActionDef >= 0) {
      finalColumns = tableColumns.filter((col: any) => col.dataIndex !== '_action')
    }

    return finalColumns
  }, [
    tableButtonsComponent,
    actionButtonType,
    onOpenForm,
    confirmDelete,
    menu,
    onOpenContextMenu,
    tableColumns,
    showDeleteButton,
  ])

  const rowSelection = useMemo(
    () =>
      selectable
        ? {
            selectedRowKeys,
            onChange: onSelectionChange,
          }
        : undefined,
    [onSelectionChange, selectable, selectedRowKeys],
  )

  return (
    <FinalTable
      {...props}
      columns={columns}
      paginationPosition={paginationPosition}
      rowSelection={rowSelection}
    />
  )
}

export const CustomizableCrudTable = withCustomization({
  identifier: 'dataIndex',
} as any)(CrudTable)
