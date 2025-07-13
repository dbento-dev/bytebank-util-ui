import React from 'react'

import { Box, Typography } from '@mui/material'

import { GradientText, HeaderWrapper } from './styles'
import { WelcomeHeaderProps } from './types'

const getFormattedDate = () => {
  const now = new Date()

  const weekday = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(
    now
  )

  const date = new Intl.DateTimeFormat('pt-BR').format(now)

  const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1)

  return `${capitalizedWeekday}, ${date}`
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ userName }) => {
  const formattedDate = getFormattedDate()

  return (
    <HeaderWrapper>
      <Box>
        <Typography variant="body1">Olá, {userName}! :]</Typography>
        <Typography variant="h6">
          <GradientText>Bem vinda de volta!</GradientText>
        </Typography>
      </Box>

      <Box>
        <Typography variant="body2">{formattedDate}</Typography>
      </Box>
    </HeaderWrapper>
  )
}

export default WelcomeHeader
