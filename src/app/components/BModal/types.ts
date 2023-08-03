export type BModalSize = "small" | "medium"

export interface BModalProps {
  isOpen: boolean
  onClose: Function
  modalsize?: BModalSize
  title: string
}

export interface ModalAlertProps {
  mode: Mode
  title?: string
}

export type Mode = "success" | "info" | "warning" | "error"
