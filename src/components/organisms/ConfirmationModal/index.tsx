import React from 'react'

import { DialogContent } from '@mui/material'

import Button from '../../atoms/Button'
import {
  StyledDialog,
  StyledDialogActions,
  StyledDialogContentText,
  StyledDialogTitle
} from './styles'
import { ConfirmationModalProps } from './types'

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  title,
  itemName,
  onClose,
  onConfirm
}) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <StyledDialogTitle>{title}</StyledDialogTitle>

      <DialogContent>
        <StyledDialogContentText>
          Você tem certeza que deseja excluir “{itemName}”?
          <br />
          Esta ação não pode ser desfeita.
        </StyledDialogContentText>
      </DialogContent>

      <StyledDialogActions>
        <Button variant="neutral" onClick={onClose}>
          Cancelar
        </Button>

        <Button variant="error" onClick={onConfirm}>
          Excluir
        </Button>
      </StyledDialogActions>
    </StyledDialog>
  )
}

export default ConfirmationModal
