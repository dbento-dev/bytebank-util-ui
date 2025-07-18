import React from 'react'

import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import Button from '../../atoms/Button'

import { ActionsContainer, ModalBox } from './styles'

import { ConfirmationModalProps } from './types'

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
  ...rest
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="confirmation-modal-title"
      aria-describedby="confirmation-modal-description"
      {...rest}
    >
      <ModalBox>
        <Typography id="confirmation-modal-title" variant="h5" component="h2">
          {title}
        </Typography>

        <Typography
          id="confirmation-modal-description"
          variant="body1"
          color="text.secondary"
        >
          {description}
        </Typography>

        <ActionsContainer>
          <Button colorVariant="neutral" onClick={onClose}>
            Cancelar
          </Button>
          <Button colorVariant="error" onClick={onConfirm}>
            Deletar
          </Button>
        </ActionsContainer>
      </ModalBox>
    </Modal>
  )
}

export default ConfirmationModal
