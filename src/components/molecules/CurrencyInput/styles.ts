import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import CurrencyInput from 'react-currency-input-field'

export const CurrencyInputFieldContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

export const StyledCurrencyInput = styled(CurrencyInput, {
  shouldForwardProp: (prop) => prop !== 'error' // Evita que a prop 'error' vá para o DOM
})<{ error?: boolean }>(({ theme, error }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1rem',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  border: `0.0625rem solid ${error ? theme.palette.error.main : theme.palette.grey[600]}`,
  borderRadius: '0.4rem',
  outline: 'none',
  padding: '1rem',
  transition: theme.transitions.create(['border-color', 'box-shadow']),

  '&:focus': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 0.125rem ${error ? theme.palette.error.main : theme.palette.primary.main}`
  },

  '&:hover': {
    borderColor: theme.palette.grey[800]
  },

  '&::placeholder': {
    color: theme.palette.text.disabled,
    opacity: 1
  },

  '&:disabled': {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.disabled,
    cursor: 'not-allowed',
    borderColor: theme.palette.grey[200]
  }
}))
