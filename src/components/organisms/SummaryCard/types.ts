import { BoxProps } from '@mui/material/Box'

export interface MonthlySummaryData {
  month: string
  Entrada: number
  Saída: number
}

export interface SummaryCardProps extends BoxProps {
  totalAmount: number
  incomeAmount: number
  expenseAmount: number
  monthlySummaryData: MonthlySummaryData[]
}
