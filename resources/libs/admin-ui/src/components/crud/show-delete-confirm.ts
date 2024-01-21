import {Modal} from "antd";
import React from "react";

export type ConfirmationProps = {
  title: React.ReactNode | string
  content?: React.ReactNode | string
  acceptText?: string
  cancelText?: string
  onAccept?: () => void
  onCancel?: () => void
}
export function showDeleteConfirm(props: ConfirmationProps) {
  const {
    title,
    content = 'Si per continuare',
    acceptText = 'Si',
    cancelText= 'No',
    onAccept = () => {},
    onCancel = () => {},
  } = props
  Modal.confirm({
    title,
    content,
    okText: acceptText,
    okType: 'danger',
    cancelText: cancelText,
    onOk: onAccept,
    onCancel: onCancel,
    zIndex: 9999
  })
}