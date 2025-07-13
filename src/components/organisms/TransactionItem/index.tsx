import React from 'react'

import NorthEastIcon from '@mui/icons-material/NorthEast'
import SouthWestIcon from '@mui/icons-material/SouthWest'
import { Box, Stack, Typography } from '@mui/material'

import IconButton from '../../atoms/IconButton'
import { AmountText, IconWrapper, ItemWrapper } from './styles'
import { TransactionItemProps } from './types'

const iconMap = {
  income: <NorthEastIcon />,
  expense: <SouthWestIcon />
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  variant,
  title,
  date,
  amount,
  onEdit,
  onDelete
}) => {
  return (
    <ItemWrapper>
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <IconWrapper variant={variant}>{iconMap[variant]}</IconWrapper>

        <Box>
          <Typography variant="body1" fontWeight="500">
            {title}
          </Typography>
          <Typography variant="body2">{date}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <AmountText customVariant={variant}>
          {variant === 'income' ? '+' : '-'} {formatCurrency(amount)}
        </AmountText>

        <Stack direction="row" spacing={1}>
          <IconButton variant="edit" onClick={onEdit} />
          <IconButton variant="delete" onClick={onDelete} />
        </Stack>
      </Stack>
    </ItemWrapper>
  )
}

export default TransactionItem
