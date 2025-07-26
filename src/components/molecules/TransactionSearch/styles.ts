import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { styled, Theme } from '@mui/material/styles'

export const InputFieldContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

export const StyledTextField = styled(TextField)(
  ({ theme }: { theme: Theme }) => ({
    fontSize: '1.6rem',
    backgroundColor: theme.palette.background.default,
    borderRadius: '0.5rem',

    '& .MuiInputBase-input': {
      padding: '1rem'
    },

    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[600]
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
      borderWidth: '0.125rem'
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[800]
    },

    '::placeholder': {
      color: theme.palette.text.disabled,
      opacity: 1
    }
  })
)
