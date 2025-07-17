import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const BoxWrapper = styled('form')(({ theme }) => ({
  marginTop: '2rem',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: '2rem'
}))

export const ActionsWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem'
}))
