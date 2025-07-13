import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'

export const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  borderRadius: '.4rem',

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[600]
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.info.main,
    borderWidth: '.2rem'
  }
}))
