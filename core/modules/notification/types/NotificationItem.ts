interface ActionItem {
  label: string,
  action?(): any
}

export default interface NotificationItem {
  type: string,
  message: string,
  timeToLive?: number,
  action1: ActionItem,
  action2?: ActionItem
}
