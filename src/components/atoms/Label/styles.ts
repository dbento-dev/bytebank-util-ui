import MuiInputLabel from '@mui/material/InputLabel'
import { styled, Theme } from '@mui/material/styles'

export const StyledLabel = styled(MuiInputLabel)(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '1rem',
    position: 'relative',
    transform: 'none',
    marginBottom: '0.5rem',

    '&.Mui-focused': {
      color: theme.palette.text.primary
    },
    '&.Mui-filled': {
      color: theme.palette.text.primary
    }
  })
)
