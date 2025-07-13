import { styled } from '@mui/material/styles'

export const StyledLabel = styled('label')(({ theme }) => ({
  fontWeight: 500,
  display: 'block',
  marginBottom: '.4rem',
  color: theme.palette.text.primary
}))
