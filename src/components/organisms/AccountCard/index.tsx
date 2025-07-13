import React from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Box, Typography } from '@mui/material'

import {
  CardBrandImage,
  CardChipImage,
  CardRow,
  CardWrapper,
  VisibilityIconButton
} from './styles'
import { AccountCardProps } from './types'

import cardBrand from '../../../assets/card-brand.png'
import cardChip from '../../../assets/card-chip.png'

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

const AccountCard: React.FC<AccountCardProps> = ({
  lastFourDigits,
  expirationDate,
  accountType,
  balance,
  isBalanceVisible,
  onToggleVisibility
}) => {
  return (
    <CardWrapper>
      <CardRow>
        <CardChipImage src={cardChip} alt="Chip do cartão" />

        <Box textAlign="right">
          <Typography variant="body1">**** {lastFourDigits}</Typography>
          <Typography variant="body2">{expirationDate}</Typography>
        </Box>
      </CardRow>

      <CardRow>
        <CardBrandImage src={cardBrand} alt="Logo do cartão" />
        <Box textAlign="right">
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <VisibilityIconButton
              size="small"
              onClick={onToggleVisibility}
              aria-label="alternar visibilidade do saldo"
            >
              {isBalanceVisible ? (
                <VisibilityOffIcon fontSize="small" />
              ) : (
                <VisibilityIcon fontSize="small" />
              )}
            </VisibilityIconButton>

            <Typography variant="h6" component="p">
              {isBalanceVisible ? formatCurrency(balance) : 'R$ ••••••'}
            </Typography>
          </Box>

          <Typography variant="body2">{accountType}</Typography>
        </Box>
      </CardRow>
    </CardWrapper>
  )
}

export default AccountCard
