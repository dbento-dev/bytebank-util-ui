import { BoxProps } from '@mui/material/Box'

export interface AccountCardProps extends BoxProps {
  lastFourDigits: string
  expiryDate: string
  accountType: string
  balance?: string
}
