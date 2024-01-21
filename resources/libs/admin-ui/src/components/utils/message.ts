import {notification} from "antd"

export type NotificationPlacement = "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "top" | "bottom"
export type NotificationType = "success" | "info" | "warning" | "error"

export const showNotification = (
  type: NotificationType,
  message: string,
  placement: NotificationPlacement = 'bottomRight',
  icon: any = undefined
) => {
  notification[type]({
    message,
    placement: placement,
    icon: icon,
    // description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  })
}

export const showResponseMessage = (data: {error: boolean, message: string}) => {
  showNotification(data.error ? 'error' : 'success', data.message)
}
