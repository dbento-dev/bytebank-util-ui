import MuiIconButton from '@mui/material/IconButton'
import { css, styled, Theme } from '@mui/material/styles'

interface CustomProps {
  customVariant: 'delete' | 'edit'
}

const getVariantStyles = (theme: Theme) => ({
  delete: css`
    background-color: ${theme.palette.error.light}80;
    color: ${theme.palette.error.dark};
    &:hover {
      background-color: ${theme.palette.error.main};
      color: ${theme.palette.error.contrastText};
    }
  `,
  edit: css`
    background-color: ${theme.palette.info.light}80;
    color: ${theme.palette.info.dark};
    &:hover {
      background-color: ${theme.palette.info.main};
      color: ${theme.palette.info.contrastText};
    }
  `
})

export const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => prop !== 'customVariant'
})<CustomProps>(({ theme, customVariant }) => {
  const variantStyles = getVariantStyles(theme)

  return [
    {
      borderRadius: '50%',
      width: '4rem',
      height: '4rem',
      transition: 'all 0.2s ease-in-out'
    },

    variantStyles[customVariant]
  ]
})
