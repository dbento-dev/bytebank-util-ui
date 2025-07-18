import { BoxProps } from '@mui/material/Box'

export type TransactionType = 'income' | 'expense'

export interface TransactionItemProps extends BoxProps {
  transactionType: TransactionType
  title: string
  date: string
  amount: string
  onEdit: () => void
  onDelete: () => void
}
