import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { styled } from '@mui/material/styles'

export const StyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: '1.6rem'
  }
}))

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  textAlign: 'left'
}))

export const StyledDialogContentText = styled(DialogContentText)({
  textAlign: 'left'
})

export const StyledDialogActions = styled(DialogActions)(() => ({
  justifyContent: 'right',
  padding: '2rem',
  gap: '.5rem'
}))
