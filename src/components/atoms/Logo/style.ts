import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  maxWidth: '15.6rem',
  width: '100%',

  [theme.breakpoints.up(1024)]: {
    maxWidth: '25.6rem'
  }
}))

export const Img = styled('img')(({ theme }) => ({
  width: '3rem',
  height: '3.8rem',

  [theme.breakpoints.up(1024)]: {
    width: '6.4rem',
    height: '7.8rem'
  }
}))

export const StText = styled('span')(({ theme }) => ({
  // todo: use correct color from theme #001c41
  color: theme.palette.text.primary,
  fontSize: '1.8rem',
  fontWeight: theme.typography.fontWeightMedium,

  [theme.breakpoints.up(1024)]: {
    fontSize: '3.6rem'
  }
}))
