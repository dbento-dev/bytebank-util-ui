// ui/src/components/molecules/CurrencyInputField/styles.ts

import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import CurrencyInput from 'react-currency-input-field'

// Reutilizamos o mesmo container do InputField para consistência.
export const CurrencyInputFieldContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

// Aplicamos os mesmos estilos do nosso StyledOutlinedInput ao componente CurrencyInput.
// Isso garante consistência visual total entre os dois componentes.
export const StyledCurrencyInput = styled(CurrencyInput)(
  ({ theme }: { theme: Theme }) => ({
    // Estilos básicos de fonte, fundo e borda
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    border: `0.0625rem solid ${theme.palette.grey[600]}`, // 1px
    borderRadius: '0.5rem', // 8px
    outline: 'none',

    // Aplicamos o mesmo padding do InputField para ter a mesma altura
    padding: '0.6rem 1rem',

    // Transição suave para a borda
    transition: theme.transitions.create(['border-color', 'box-shadow']),

    // Estilo ao focar o campo
    '&:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 0.125rem ${theme.palette.primary.main}` // Efeito de anel no foco
    },

    // Estilo no hover
    '&:hover': {
      borderColor: theme.palette.grey[800]
    },

    // Estilo do placeholder
    '&::placeholder': {
      color: theme.palette.text.disabled,
      opacity: 1
    },

    // Estilo para o estado desabilitado
    '&:disabled': {
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.text.disabled,
      cursor: 'not-allowed',
      borderColor: theme.palette.grey[200]
    }
  })
)
