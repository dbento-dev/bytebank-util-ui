import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

export const InputLabel = styled('label')(({ theme }) => ({
  fontWeight: 500,
  display: 'block',
  marginBottom: '.4rem',
  color: theme.palette.text.primary
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.grey[50],
    borderRadius: '.4rem',

    '& legend': {
      display: 'none'
    },

    '& fieldset': {
      top: 0
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[600]
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.info.main,
      borderWidth: '.2rem'
    }
  }
}))
