import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'

export const CardContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '2rem',
  borderRadius: '0.8rem',
  width: '100%'
}))

export const SummaryBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  padding: '1rem 1.5rem',
  borderRadius: '0.4rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))

export const ChartContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.grey[900],
  borderRadius: '0.4rem',
  padding: '1.5rem',
  minHeight: '10rem'
}))
