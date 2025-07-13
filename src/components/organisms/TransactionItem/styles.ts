import { Box, Typography } from '@mui/material'
import { css, styled, Theme } from '@mui/material/styles'

import { StyleVariantProps } from './types'

const getIconWrapperStyles = (theme: Theme) => ({
  income: css`
    background-color: ${theme.palette.success.light}80;
    color: ${theme.palette.success.dark};
  `,
  expense: css`
    background-color: ${theme.palette.error.light}80;
    color: ${theme.palette.error.dark};
  `
})

const getAmountTextStyles = (theme: Theme) => ({
  income: css`
    color: ${theme.palette.success.dark};
  `,
  expense: css`
    color: ${theme.palette.error.dark};
  `
})

export const ItemWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: theme.palette.grey[50],
  borderRadius: '.4rem'
}))

export const IconWrapper = styled(Box)<{ variant: 'income' | 'expense' }>(({
  theme,
  variant
}) => {
  const variantStyles = getIconWrapperStyles(theme)

  return [
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '4rem',
      height: '4rem',
      borderRadius: '50%'
    },

    variantStyles[variant]
  ]
})

export const AmountText = styled(Typography)<StyleVariantProps>(({
  theme,
  customVariant
}) => {
  const variantStyles = getAmountTextStyles(theme)

  return [
    {
      fontWeight: 'bold'
    },

    variantStyles[customVariant]
  ]
})
