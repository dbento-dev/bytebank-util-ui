export interface ConfirmationModalProps {
  open: boolean
  title: string
  itemName: string
  onClose: () => void
  onConfirm: () => void
}
