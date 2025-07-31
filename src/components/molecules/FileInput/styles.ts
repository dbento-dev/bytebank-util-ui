import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { styled } from '@mui/material/styles'

export const FileInputContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  border: '1px solid #ccc',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem'
})

export const HiddenInput = styled('input')({
  display: 'none'
})

export const FileNameText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontStyle: 'italic',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}))
