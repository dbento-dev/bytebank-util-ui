import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { GradientTypography, HeaderContainer } from './styles'
import { WelcomeHeaderProps } from './types'

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
  userName,
  welcomeMessage,
  dateString,
  ...rest
}) => {
  return (
    <HeaderContainer {...rest}>
      <Box>
        <Typography variant="h5" component="p" color="text.primary">
          {`Olá, ${userName} ! :)`}
        </Typography>

        <GradientTypography variant="h4" component="h1">
          {welcomeMessage}
        </GradientTypography>
      </Box>

      <Box sx={{ alignSelf: 'flex-end' }}>
        <Typography variant="body2" color="text.secondary">
          {dateString}
        </Typography>
      </Box>
    </HeaderContainer>
  )
}

export default WelcomeHeader
