import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const HeaderWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

export const GradientText = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.info.main}, ${theme.palette.info.main})`,
  backgroundClip: 'text',
  color: 'transparent'
}))
