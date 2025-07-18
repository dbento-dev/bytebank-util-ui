import MuiIconButton from '@mui/material/IconButton'
import { alpha, styled, Theme } from '@mui/material/styles'
import { IconButtonProps } from './types'

const variantStyles = (theme: Theme, variant: IconButtonProps['variant']) => {
  const styles = {
    edit: {
      color: theme.palette.info.main,
      backgroundColor: alpha(theme.palette.info.main, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.info.main, 0.25)
      }
    },
    delete: {
      color: theme.palette.error.main,
      backgroundColor: alpha(theme.palette.error.main, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.error.main, 0.25)
      }
    }
  }
  return styles[variant]
}

export const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => prop !== 'variant'
})<IconButtonProps>(({ theme, variant }) => ({
  width: '2.5rem',
  height: '2.5rem',
  boxShadow: 'none',

  ...variantStyles(theme, variant),

  '&:disabled': {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.disabled,
    cursor: 'not-allowed',
    pointerEvents: 'all'
  }
}))
