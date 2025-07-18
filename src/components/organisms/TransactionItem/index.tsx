import React from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import IconButton from '../../atoms/IconButton'

import ArrowNorthEastIcon from '@mui/icons-material/NorthEast'
import ArrowSouthWestIcon from '@mui/icons-material/SouthWest'

import { AmountText, ItemContainer, TransactionIcon } from './styles'

import { TransactionItemProps } from './types'

const TransactionItem: React.FC<TransactionItemProps> = ({
  transactionType,
  title,
  date,
  amount,
  onEdit,
  onDelete,
  ...rest
}) => {
  const isIncome = transactionType === 'income'

  return (
    <ItemContainer {...rest}>
      <TransactionIcon transactionType={transactionType}>
        {isIncome ? <ArrowNorthEastIcon /> : <ArrowSouthWestIcon />}
      </TransactionIcon>

      <Box
        sx={{
          flexGrow: 1,
          mx: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography variant="h6" color="text.primary" fontWeight="medium">
            {title}
          </Typography>
          <Typography variant="body2" color="text.disabled">
            {date}
          </Typography>
        </Box>
        <AmountText transactionType={transactionType}>{amount}</AmountText>
      </Box>

      <Stack direction="row" spacing={0.5}>
        <IconButton variant="edit" onClick={onEdit} />
        <IconButton variant="delete" onClick={onDelete} />
      </Stack>
    </ItemContainer>
  )
}

export default TransactionItem
