import React, { useState } from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import cardBrand from '../../../assets/card-brand.png'
import cardChip from '../../../assets/card-chip.png'

import {
  BalanceText,
  BrandIconImage,
  CardContainer,
  CardIconImage,
  FlexContainer
} from './styles'

import { AccountCardProps } from './types'

const AccountCard: React.FC<AccountCardProps> = ({
  lastFourDigits,
  expiryDate,
  accountType,
  balance,
  ...rest
}) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true)

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible((prev) => !prev)
  }

  return (
    <CardContainer {...rest}>
      <FlexContainer>
        <CardIconImage src={cardChip} alt="Ícone do cartão" />
        <Box textAlign="right">
          <Typography variant="body1">{`**** ${lastFourDigits}`}</Typography>
          <Typography variant="body2" color="grey.200">
            {expiryDate}
          </Typography>
        </Box>
      </FlexContainer>

      <FlexContainer>
        <BrandIconImage src={cardBrand} alt="Ícone da bandeira do cartão" />
        <Box textAlign="right">
          {balance && (
            <BalanceText variant="h6">
              <IconButton
                onClick={toggleBalanceVisibility}
                size="small"
                sx={{ color: 'common.white' }}
                aria-label={
                  isBalanceVisible ? 'Ocultar saldo' : 'Mostrar saldo'
                }
              >
                {isBalanceVisible ? (
                  <VisibilityIcon fontSize="inherit" />
                ) : (
                  <VisibilityOffIcon fontSize="inherit" />
                )}
              </IconButton>
              {isBalanceVisible ? balance : 'R$ ••••••'}
            </BalanceText>
          )}
          <Typography variant="body2">{accountType}</Typography>
        </Box>
      </FlexContainer>
    </CardContainer>
  )
}

export default AccountCard
