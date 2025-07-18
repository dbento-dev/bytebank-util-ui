import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { alpha, styled, Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { TransactionType } from './types'

export const ItemContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: theme.palette.grey[50],
  borderRadius: '0.75rem',
  width: '100%'
}))

export const TransactionIcon = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'transactionType'
})<{ transactionType: TransactionType }>(({ theme, transactionType }) => ({
  backgroundColor: alpha(
    theme.palette[transactionType === 'income' ? 'success' : 'error'].main,
    0.15
  ),
  color: theme.palette[transactionType === 'income' ? 'success' : 'error'].main
}))

export const AmountText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'transactionType'
})<{ transactionType: TransactionType }>(({ theme, transactionType }) => ({
  color: theme.palette[transactionType === 'income' ? 'success' : 'error'].main,
  fontWeight: theme.typography.fontWeightMedium,
  textAlign: 'right'
}))
