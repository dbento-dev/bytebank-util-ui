import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { styled, Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const UserInfoContainer = styled(Stack)({
  alignItems: 'center'
})

export const StyledAvatar = styled(Avatar)(({ theme }: { theme: Theme }) => ({
  border: `0.125rem solid ${theme.palette.primary.main}`,
  backgroundColor: 'transparent',
  color: theme.palette.primary.main
}))

export const UserName = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary
}))
