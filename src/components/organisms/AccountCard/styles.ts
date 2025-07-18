import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const CardContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  borderRadius: '1rem',
  padding: '1.5rem',
  width: '100%',
  maxWidth: '25rem',
  height: '15rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxSizing: 'border-box'
}))

export const FlexContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const BalanceText = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
})

export const CardIconImage = styled('img')({
  width: '1.5rem',
  height: 'auto'
})

export const BrandIconImage = styled('img')({
  width: '3rem',
  height: 'auto'
})
