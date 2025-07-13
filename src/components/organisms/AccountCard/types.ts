export interface AccountCardProps {
  lastFourDigits: string
  expirationDate: string
  accountType: string
  balance: number
  isBalanceVisible: boolean
  onToggleVisibility: () => void
}
