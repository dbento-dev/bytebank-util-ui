export interface TransactionFormData {
  type: string
  amount: string | undefined
  description: string
}

export interface TransactionFormProps {
  variant: 'create' | 'edit'
  initialData?: TransactionFormData
  onSubmit: (data: TransactionFormData) => void
  onCancel?: () => void
}
