import MuiButton from '@mui/material/Button'

import { styled, Theme } from '@mui/material/styles'

import { ButtonProps } from './types'

const variantStyles = (
  theme: Theme,
  colorVariant: ButtonProps['colorVariant']
) => {
  const styles = {
    info: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      border: `0.125rem solid ${theme.palette.info.dark}`,
      '&:hover': {
        backgroundColor: theme.palette.info.dark
      }
    },
    error: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      border: `0.125rem solid ${theme.palette.error.dark}`,
      '&:hover': {
        backgroundColor: theme.palette.error.dark
      }
    },
    neutral: {
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.text.secondary,
      border: `0.125rem solid ${theme.palette.grey[400]}`,
      '&:hover': {
        backgroundColor: theme.palette.grey[500],
        color: theme.palette.common.white
      }
    }
  }

  return styles[colorVariant || 'info']
}

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'colorVariant'
})<ButtonProps>(({ theme, colorVariant }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: '1.2rem',
  textTransform: 'none',
  borderRadius: '0.4rem',
  padding: '0.85rem 1.71rem',
  boxShadow: 'none',
  lineHeight: '1.5',

  ...variantStyles(theme, colorVariant),

  '&:disabled': {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.disabled,
    cursor: 'not-allowed',
    pointerEvents: 'all',
    border: 'none'
  }
}))
