import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Box from '@mui/material/Box'
import MuiSelect from '@mui/material/Select'
import { styled, Theme } from '@mui/material/styles'

export const SelectFieldContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

export const StyledSelect = styled(MuiSelect)(
  ({ theme }: { theme: Theme }) => ({
    fontSize: '1rem',
    backgroundColor: theme.palette.background.default,
    borderRadius: '0.5rem',

    '& .MuiSelect-select': {
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
    }
  })
)

export const StyledArrowDropDownIcon = styled(ArrowDropDownIcon)(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.text.secondary
  })
)
