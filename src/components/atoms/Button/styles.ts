import MuiButton from '@mui/material/Button'
import { css, styled, Theme } from '@mui/material/styles'

interface CustomProps {
  customVariant: 'info' | 'error' | 'neutral'
}

const getVariantStyles = (theme: Theme) => ({
  info: css`
    background-color: ${theme.palette.info.main};
    color: ${theme.palette.info.contrastText};
    border: 0.1rem solid ${theme.palette.info.dark};
    &:hover {
      background-color: ${theme.palette.info.dark};
    }
  `,
  error: css`
    background-color: ${theme.palette.error.main};
    color: ${theme.palette.error.contrastText};
    border: 0.1rem solid ${theme.palette.error.dark};
    &:hover {
      background-color: ${theme.palette.error.dark};
    }
  `,
  neutral: css`
    background-color: ${theme.palette.common.white};
    color: ${theme.palette.text.primary};
    border: 0.1rem solid ${theme.palette.grey[100]};
    &:hover {
      background-color: ${theme.palette.grey[100]};
    }
  `
})

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'customVariant'
})<CustomProps>(({ theme, customVariant }) => {
  const variantStyles = getVariantStyles(theme)

  return [
    {
      fontSize: '1.6rem',
      borderRadius: '0.8rem',
      padding: '1rem 2rem',
      transition: 'all 0.2s ease-in-out',
      textTransform: 'none'
    },

    variantStyles[customVariant]
  ]
})
