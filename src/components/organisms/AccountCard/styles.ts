import { Box, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CardWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  borderRadius: '1.6rem',
  padding: '1.5rem',
  minHeight: '12rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}))

export const CardRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start'
})

export const CardChipImage = styled('img')({
  width: '2rem'
})

export const CardBrandImage = styled('img')({
  width: '4rem',
  height: 'auto'
})

export const VisibilityIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  marginRight: '.5rem'
}))
