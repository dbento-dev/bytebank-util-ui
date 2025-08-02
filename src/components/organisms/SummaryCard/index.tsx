import React from 'react'

import { Stack, Typography } from '@mui/material'

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { CardContainer, ChartContainer, SummaryBox } from './styles'
import { SummaryCardProps } from './types'

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  totalAmount,
  incomeAmount,
  expenseAmount,
  monthlySummaryData
}) => {
  return (
    <CardContainer>
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 3, fontWeight: 'fontWeightBold' }}
      >
        Resumo
      </Typography>

      <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
        Total: {formatCurrency(totalAmount)}
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <SummaryBox>
          <Typography variant="body1">Entrada</Typography>
          <Typography variant="h4">{formatCurrency(incomeAmount)}</Typography>
        </SummaryBox>

        <SummaryBox>
          <Typography variant="body1">Saída</Typography>
          <Typography variant="h4">{formatCurrency(expenseAmount)}</Typography>
        </SummaryBox>
      </Stack>

      <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
        Estatísticas
      </Typography>

      <ChartContainer>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={monthlySummaryData}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <XAxis dataKey="month" tick={{ fill: '#fff' }} fontSize="0.8rem" />
            <YAxis
              tick={{ fill: '#fff' }}
              fontSize="0.8rem"
              tickFormatter={(value) => `R$${value / 1000}k`}
            />
            <Tooltip
              cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
              contentStyle={{
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '0.4rem'
              }}
              formatter={(value: number) => formatCurrency(value)}
            />
            <Legend />
            <Bar dataKey="Entrada" fill="#2d68fd" />
            <Bar dataKey="Saída" fill="#ed4a4c" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardContainer>
  )
}

export default SummaryCard
