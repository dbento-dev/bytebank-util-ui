import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

export const HeaderContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%'
}))

export const GradientTypography = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.info.main})`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: theme.typography.fontWeightBold
  })
)
