import { ModalProps } from '@mui/material/Modal'

export interface ConfirmationModalProps
  extends Omit<ModalProps, 'children' | 'onClose'> {
  open: boolean
  title: string
  description: string
  onClose: () => void
  onConfirm: () => void
}
