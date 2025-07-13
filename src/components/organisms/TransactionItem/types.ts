export interface TransactionItemProps {
  variant: 'income' | 'expense'
  title: string
  date: string
  amount: number
  onEdit: () => void
  onDelete: () => void
}

export interface StyleVariantProps {
  customVariant: 'income' | 'expense'
}
